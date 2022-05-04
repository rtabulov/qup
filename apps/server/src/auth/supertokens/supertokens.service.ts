import { Inject, Injectable } from '@nestjs/common';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import EmailPassword from 'supertokens-node/recipe/emailpassword';

import { ConfigInjectionToken, AuthModuleConfig } from '../config.interface';
import { ProfileService } from '../profile.service';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { makeValidateFieldFn } from '../../utils';
import { plainToInstance } from 'class-transformer';
import { omit } from 'lodash';

@Injectable()
export class SupertokensService {
  constructor(
    @Inject(ConfigInjectionToken) private config: AuthModuleConfig,
    private profileService: ProfileService,
  ) {
    supertokens.init({
      appInfo: config.appInfo,
      supertokens: {
        connectionURI: config.connectionURI,
        apiKey: config.apiKey,
      },
      recipeList: [
        EmailPassword.init({
          signUpFeature: {
            formFields: [
              {
                id: 'firstName',
                validate: makeValidateFieldFn('firstName', CreateProfileDto),
              },
              {
                id: 'lastName',
                validate: makeValidateFieldFn('lastName', CreateProfileDto),
              },
              {
                id: 'middleName',
                validate: makeValidateFieldFn('middleName', CreateProfileDto),
              },
              {
                id: 'position',
                validate: makeValidateFieldFn('position', CreateProfileDto),
              },
              {
                id: 'departmentId',
                validate: makeValidateFieldFn('departmentId', CreateProfileDto),
              },
            ],
          },
          override: {
            apis: (originalImplementation) => {
              return {
                ...originalImplementation,
                signUpPOST: async function (input) {
                  if (originalImplementation.signUpPOST === undefined) {
                    throw Error('Should never come here');
                  }
                  // First we call the original implementation of signUpPOST.
                  let response = await originalImplementation.signUpPOST(input);

                  // Post sign up response, we check if it was successful
                  if (response.status === 'OK') {
                    // These are the input form fields values that the user used while signing up

                    try {
                      const dtoObj = omit(
                        Object.fromEntries(
                          input.formFields.map(({ id, value }) => [id, value]),
                        ),
                        ['password'],
                      );

                      const createProfileDto = plainToInstance(
                        CreateProfileDto,
                        {
                          ...dtoObj,
                          userId: response.user.id,
                        },
                      );

                      await profileService.createProfile(createProfileDto);
                    } catch {
                      supertokens.deleteUser(response.user.id);
                    }
                  }

                  return response;
                },
              };
            },
          },
        }),
        Session.init({
          override: {
            functions: (originalImplementation) => {
              return {
                ...originalImplementation,
                createNewSession: async function (input) {
                  let userId = input.userId;

                  const { role } = await profileService.getProfile(userId);

                  // This goes in the access token, and is availble to read on the frontend.
                  input.accessTokenPayload = {
                    ...input.accessTokenPayload,
                    roleKey: role.key,
                  };

                  // This is stored in the db against the sessionHandle for this session
                  // input.sessionData = {
                  //   ...input.sessionData,
                  //   someKey: 'someValue',
                  // };
                  return originalImplementation.createNewSession(input);
                },
              };
            },
          },
        }),
      ],
    });
  }
}

FROM node:16.14-alpine

# ENV NODE_ENV=production
ENV SESSION_SECRET=asdffgmklmsdf
ENV SESSION_SECURE='false'
ENV SESSION_NAME=notyourbusinessfriend
ENV HOST=https://diplomka-rtabulov.herokuapp.com

WORKDIR "/app"

RUN npm i -g pnpm

COPY pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm fetch --prod

COPY . ./

RUN pnpm install -r --offline --prod --unsafe-perm

EXPOSE 3000

CMD [ "pnpm", "start" ]

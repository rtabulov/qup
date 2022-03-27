FROM node:16.14-alpine

# ENV NODE_ENV=production
ENV SESSION_SECRET=asdffgmklmsdf
ENV SESSION_SECURE='false'
ENV SESSION_NAME=notyourbusinessfriend
ENV CERTIFICATE_UPLOAD_DIR=public/uploads/certificates
ENV HOST=http://localhost:3333

WORKDIR "/app"

RUN npm i -g pnpm

COPY pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm fetch

COPY . ./

RUN pnpm install -r --offline --unsafe-perm

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]

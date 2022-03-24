FROM node:16.14-alpine

# ENV NODE_ENV=production
ENV SESSION_SECRET=asdffgmklmsdf
ENV SESSION_SECURE='false'
ENV SESSION_NAME=notyourbusinessfriend
ENV CERTIFICATE_UPLOAD_DIR=public/uploads/certificates
ENV HOST=http://localhost:3333
ENV REDIS_HOST=redis
ENV DB_HOST=db

WORKDIR "/app"

# install pnpm
# RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN npm i -g pnpm

# COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# COPY apps/server/package.json apps/server/
# COPY apps/client/package.json apps/client/

# RUN pnpm install --frozen-lockfile

# COPY . .

# RUN pnpm build

COPY pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm fetch

COPY . ./

RUN pnpm install -r --offline

EXPOSE 3000

CMD [ "pnpm", "start" ]

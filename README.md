# QUP

## run locally

### prerequisites

- docker (with compose)
- nodejs (14 or 16)
- pnpm

### steps

- create env file in ./apps/server/.env.local
- docker compose up -d
- pnpm install
- pnpm run --filter ./apps/server db:migrate-deploy
- pnpm run --filter ./apps/server db:seed
- pnpm build
- pnpm start

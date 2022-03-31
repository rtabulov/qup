"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("./prisma/prisma.service");
const app_module_1 = require("./app.module");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    const logger = app.get(common_1.Logger);
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('PORT') || 3000;
    await app.listen(PORT);
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    logger.log(`Application listening at ${await app.getUrl()}`);
};
bootstrap();
//# sourceMappingURL=main.js.map
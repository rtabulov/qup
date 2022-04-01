"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const RedisStore = require("connect-redis");
const session = require("express-session");
const passport = require("passport");
const redis_1 = require("redis");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const departments_module_1 = require("./departments/departments.module");
const auth_module_1 = require("./auth/auth.module");
const redis_constants_1 = require("./redis/redis.constants");
const redis_module_1 = require("./redis/redis.module");
const certificates_module_1 = require("./certificates/certificates.module");
const file_meta_module_1 = require("./file-meta/file-meta.module");
const uploads_1 = require("./uploads");
let AppModule = class AppModule {
    constructor(redis, configService) {
        this.redis = redis;
        this.configService = configService;
    }
    configure(consumer) {
        consumer
            .apply(session({
            store: new (RedisStore(session))({
                client: this.redis,
                logErrors: true,
            }),
            saveUninitialized: false,
            secret: this.configService.get('SESSION_SECRET'),
            resave: false,
            rolling: true,
            name: this.configService.get('SESSION_NAME'),
            cookie: {
                sameSite: true,
                httpOnly: true,
                maxAge: 30 * 60 * 1000,
                secure: this.configService.get('SESSION_SECURE') === 'true',
            },
        }), passport.initialize(), passport.session())
            .forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', '.env.local'],
            }),
            uploads_1.UploadsModule,
            departments_module_1.DepartmentsModule,
            auth_module_1.AuthModule,
            redis_module_1.RedisModule,
            certificates_module_1.CertificatesModule,
            file_meta_module_1.FileMetaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [common_1.Logger],
    }),
    __param(0, (0, common_1.Inject)(redis_constants_1.REDIS)),
    __metadata("design:paramtypes", [redis_1.RedisClient,
        config_1.ConfigService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
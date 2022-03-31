"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisModule = void 0;
const common_1 = require("@nestjs/common");
const Redis = require("redis");
const config_1 = require("@nestjs/config");
const redis_constants_1 = require("./redis.constants");
let RedisModule = class RedisModule {
};
RedisModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                inject: [config_1.ConfigService],
                provide: redis_constants_1.REDIS,
                useFactory(configService) {
                    return Redis.createClient({
                        url: configService.get('REDIS_URL'),
                        port: configService.get('REDIS_PORT'),
                        host: configService.get('REDIS_HOST'),
                    });
                },
            },
        ],
        exports: [redis_constants_1.REDIS],
    })
], RedisModule);
exports.RedisModule = RedisModule;
//# sourceMappingURL=redis.module.js.map
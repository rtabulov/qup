"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatesModule = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const fs = require("fs");
const multer_1 = require("multer");
const config_1 = require("@nestjs/config");
const nanoid_1 = require("nanoid");
const certificates_service_1 = require("./certificates.service");
const certificates_controller_1 = require("./certificates.controller");
const file_meta_module_1 = require("../file-meta/file-meta.module");
const prisma_1 = require("../prisma");
let CertificatesModule = class CertificatesModule {
};
CertificatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            file_meta_module_1.FileMetaModule,
            prisma_1.PrismaModule,
            platform_express_1.MulterModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory(configService) {
                    return {
                        storage: makeStorage(configService.get('CERTIFICATE_UPLOAD_DIR')),
                    };
                },
            }),
        ],
        controllers: [certificates_controller_1.CertificatesController],
        providers: [certificates_service_1.CertificatesService],
    })
], CertificatesModule);
exports.CertificatesModule = CertificatesModule;
function makeStorage(pubDir) {
    return (0, multer_1.diskStorage)({
        destination: function (req, file, cb) {
            const p = path.join(process.cwd(), pubDir);
            fs.mkdirSync(p, { recursive: true });
            cb(null, p);
        },
        filename: async function (req, file, cb) {
            const a = path.parse(file.originalname);
            const id = (0, nanoid_1.nanoid)(8);
            cb(null, a.name + '.' + id + a.ext);
        },
    });
}
//# sourceMappingURL=certificates.module.js.map
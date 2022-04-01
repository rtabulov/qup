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
const certificates_service_1 = require("./certificates.service");
const certificates_controller_1 = require("./certificates.controller");
const file_meta_module_1 = require("../file-meta/file-meta.module");
const prisma_1 = require("../prisma");
const supabase_1 = require("../supabase");
let CertificatesModule = class CertificatesModule {
};
CertificatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            file_meta_module_1.FileMetaModule,
            prisma_1.PrismaModule,
            supabase_1.SupabaseModule,
            platform_express_1.MulterModule.register(),
        ],
        controllers: [certificates_controller_1.CertificatesController],
        providers: [certificates_service_1.CertificatesService],
    })
], CertificatesModule);
exports.CertificatesModule = CertificatesModule;
//# sourceMappingURL=certificates.module.js.map
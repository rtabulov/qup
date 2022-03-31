"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMetaModule = void 0;
const common_1 = require("@nestjs/common");
const file_meta_service_1 = require("./file-meta.service");
const file_meta_controller_1 = require("./file-meta.controller");
const prisma_1 = require("../prisma");
let FileMetaModule = class FileMetaModule {
};
FileMetaModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_1.PrismaModule],
        controllers: [file_meta_controller_1.FileMetaController],
        providers: [file_meta_service_1.FileMetaService],
        exports: [file_meta_service_1.FileMetaService],
    })
], FileMetaModule);
exports.FileMetaModule = FileMetaModule;
//# sourceMappingURL=file-meta.module.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMetaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../prisma");
let FileMetaService = class FileMetaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createFileMetaDto) {
        return 'This action adds a new fileMeta';
    }
    async createBatch(files) {
        return Promise.all(files.map((f) => this.prismaService.fileMeta.create({ data: f })));
    }
    findAll() {
        return `This action returns all fileMeta`;
    }
    findOne(id) {
        return `This action returns a #${id} fileMeta`;
    }
    update(id, updateFileMetaDto) {
        return `This action updates a #${id} fileMeta`;
    }
    remove(id) {
        return `This action removes a #${id} fileMeta`;
    }
    async removeByCertificate(certificate) {
        return this.prismaService.fileMeta.deleteMany({
            where: { certificateId: certificate.id },
        });
    }
};
FileMetaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], FileMetaService);
exports.FileMetaService = FileMetaService;
//# sourceMappingURL=file-meta.service.js.map
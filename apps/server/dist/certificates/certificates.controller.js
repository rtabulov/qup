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
exports.CertificatesController = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const nanoid_1 = require("nanoid");
const certificates_service_1 = require("./certificates.service");
const create_certificate_dto_1 = require("./dto/create-certificate.dto");
const file_meta_service_1 = require("../file-meta/file-meta.service");
const logged_in_guard_1 = require("../logged-in.guard");
const update_certificate_dto_1 = require("./dto/update-certificate.dto");
const roles_guard_1 = require("../roles.guard");
const supabase_1 = require("../supabase");
let CertificatesController = class CertificatesController {
    constructor(supabaseService, certificatesService, fileMetaService) {
        this.supabaseService = supabaseService;
        this.certificatesService = certificatesService;
        this.fileMetaService = fileMetaService;
    }
    async create(createCertificateDto, uploadedFiles, req) {
        const certificate = await this.certificatesService.create(Object.assign(Object.assign({}, createCertificateDto), { teacherId: req.user.id }));
        const withUniqFilenames = uploadedFiles.map((f) => {
            const parsed = path.parse(f.originalname);
            const uniqFilename = `${parsed.name}.${(0, nanoid_1.nanoid)(8)}${parsed.ext}`;
            return Object.assign(Object.assign({}, f), { uniqFilename });
        });
        const supabaseFiles = await Promise.all(withUniqFilenames.map((f) => this.supabaseService.storage
            .from('certificates')
            .upload(f.uniqFilename, f.buffer)));
        if (supabaseFiles.some((f) => f.error)) {
            throw supabaseFiles.find((f) => f.error);
        }
        const newFiles = withUniqFilenames.map((f) => ({
            name: f.uniqFilename,
            mimetype: f.mimetype,
            certificateId: certificate.id,
        }));
        await this.fileMetaService.createBatch(newFiles);
        return this.certificatesService.findOne(certificate.id);
    }
    findApproved() {
        return this.certificatesService.findApproved();
    }
    findAwaitingApproval() {
        return this.certificatesService.findAwaitingApproval();
    }
    async exportAll(res) {
        const workbook = await this.certificatesService.exportAll();
        var fileName = 'report.xlsx';
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
        workbook.xlsx.write(res).then(function () {
            res.end();
        });
    }
    findOne(id) {
        return this.certificatesService.findOne(id, { expand: true });
    }
    async update(id, uploadedFiles, updateCertificateDto, req) {
        const certificate = await this.certificatesService.findOne(id);
        if (uploadedFiles) {
            const withUniqFilenames = uploadedFiles.map((f) => {
                const parsed = path.parse(f.originalname);
                const uniqFilename = `${parsed.name}.${(0, nanoid_1.nanoid)(8)}${parsed.ext}`;
                return Object.assign(Object.assign({}, f), { uniqFilename });
            });
            const supabaseFiles = await Promise.all(withUniqFilenames.map((f) => this.supabaseService.storage
                .from('certificates')
                .upload(f.uniqFilename, f.buffer)));
            if (supabaseFiles.some((f) => f.error)) {
                throw supabaseFiles.find((f) => f.error);
            }
            const newFiles = withUniqFilenames.map((f) => ({
                name: f.uniqFilename,
                mimetype: f.mimetype,
                certificateId: certificate.id,
            }));
            await this.fileMetaService.createBatch(newFiles);
        }
        await this.certificatesService.update(id, req.user, updateCertificateDto);
        return certificate;
    }
    remove(id, req) {
        return this.certificatesService.remove(id, req.user);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, roles_guard_1.AllowRoles)('teacher')),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_certificate_dto_1.CreateCertificateDto,
        Array, Object]),
    __metadata("design:returntype", Promise)
], CertificatesController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, roles_guard_1.AllowRoles)('hr', 'departmentHead')),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "findApproved", null);
__decorate([
    (0, common_1.UseGuards)((0, roles_guard_1.AllowRoles)('hr', 'departmentHead')),
    (0, common_1.Get)('awaiting-approval'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "findAwaitingApproval", null);
__decorate([
    (0, common_1.UseGuards)((0, roles_guard_1.AllowRoles)('hr', 'departmentHead')),
    (0, common_1.Get)('report'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CertificatesController.prototype, "exportAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array,
        update_certificate_dto_1.UpdateCertificateDto, Object]),
    __metadata("design:returntype", Promise)
], CertificatesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "remove", null);
CertificatesController = __decorate([
    (0, common_1.Controller)('certificates'),
    __metadata("design:paramtypes", [supabase_1.SupabaseService,
        certificates_service_1.CertificatesService,
        file_meta_service_1.FileMetaService])
], CertificatesController);
exports.CertificatesController = CertificatesController;
//# sourceMappingURL=certificates.controller.js.map
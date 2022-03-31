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
exports.CertificatesService = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const ExcelJS = require("exceljs");
const config_1 = require("@nestjs/config");
const utils_1 = require("../utils");
const prisma_1 = require("../prisma");
const client_1 = require("@prisma/client");
let CertificatesService = class CertificatesService {
    constructor(prismaService, configService) {
        this.prismaService = prismaService;
        this.configService = configService;
    }
    create(certificate) {
        return this.prismaService.certificate.create({
            data: Object.assign({}, certificate),
        });
    }
    findAll() {
        return this.prismaService.certificate.findMany({
            include: { teacher: true, files: true },
        });
    }
    findApproved() {
        return this.prismaService.certificate.findMany({
            where: { approved: true },
            include: { teacher: { include: { department: true } }, files: true },
        });
    }
    findAwaitingApproval() {
        return this.prismaService.certificate.findMany({
            where: { approved: false, awaitingApproval: true },
            include: { teacher: true, files: true },
        });
    }
    async exportAll() {
        const certificates = (await this.findApproved()).map((c) => (Object.assign(Object.assign({}, c), { teacher: Object.assign(Object.assign({}, c.teacher), { fullName: `${c.teacher.lastName} ${c.teacher.firstName} ${c.teacher.middleName}` }) })));
        const groupedByDepartments = (0, lodash_1.groupBy)(certificates, 'teacher.department.name');
        const workbook = new ExcelJS.Workbook();
        const host = this.configService.get('HOST');
        Object.entries(groupedByDepartments).forEach(([department, certificates]) => {
            const ws = workbook.addWorksheet(department);
            ws.columns = [
                { header: 'ФИО преподавателя', key: 'fullName' },
                { header: 'Название курса', key: 'name' },
                { header: 'Кем выдан', key: 'issuedBy' },
                { header: 'Дата выдачи', key: 'issuedDate' },
                { header: 'Дата начала обучения', key: 'startDate' },
                { header: 'Дата окончания обучения', key: 'endDate' },
                { header: 'Прикрепленные файлы', key: 'files' },
            ];
            ws.addRows((0, lodash_1.sortBy)(certificates, 'teacher.fullName').map((cert) => ({
                fullName: cert.teacher.fullName,
                name: cert.name,
                issuedBy: cert.issuedBy,
                issuedDate: new Date(cert.issuedDate),
                startDate: new Date(cert.startDate),
                endDate: new Date(cert.endDate),
                files: cert.files
                    .map((f) => `${host}/uploads/certificates/${f.name}`)
                    .join('\n'),
            })));
            autoWidth(ws);
        });
        return workbook;
    }
    findOne(id, { expand = false } = {}) {
        try {
            return this.prismaService.certificate.findUnique({
                where: { id },
                include: {
                    teacher: expand,
                    files: expand,
                },
            });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientValidationError) {
                throw new common_1.NotFoundException();
            }
        }
    }
    async update(id, user, updateCertificateDto) {
        var _a;
        const found = await this.findOne(id, { expand: true });
        if (!found) {
            throw new common_1.NotFoundException();
        }
        if (found.approved) {
            throw new common_1.BadRequestException();
        }
        if (found.teacher.id !== user.id &&
            !(0, utils_1.resolveAuthLevel)(user.role.key, 'hr')) {
            throw new common_1.ForbiddenException();
        }
        return this.prismaService.certificate.update({
            where: { id },
            data: Object.assign(Object.assign({}, updateCertificateDto), { awaitingApproval: (_a = updateCertificateDto.awaitingApproval) !== null && _a !== void 0 ? _a : true }),
        });
    }
    async remove(id, requestUser) {
        const cert = await this.findOne(id, { expand: true });
        if (requestUser.id !== cert.teacher.id) {
            throw new common_1.UnauthorizedException();
        }
        return this.prismaService.certificate.delete({ where: { id } });
    }
};
CertificatesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService,
        config_1.ConfigService])
], CertificatesService);
exports.CertificatesService = CertificatesService;
const autoWidth = (worksheet, minimalWidth = 10) => {
    worksheet.columns.forEach((column) => {
        let maxColumnLength = 0;
        column.eachCell({ includeEmpty: true }, (cell) => {
            maxColumnLength = Math.max(maxColumnLength, minimalWidth, cell.value
                ? cell.value instanceof Date
                    ? 8
                    : cell.value.toString().length
                : 0);
        });
        column.width = maxColumnLength + 2;
    });
};
//# sourceMappingURL=certificates.service.js.map
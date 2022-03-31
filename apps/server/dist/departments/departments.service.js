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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../prisma");
let DepartmentsService = class DepartmentsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createDepartmentDto) {
        return this.prismaService.department.create({ data: createDepartmentDto });
    }
    findAll() {
        return this.prismaService.department.findMany();
    }
    findOne(id) {
        return this.prismaService.department.findUnique({ where: { id } });
    }
    update(id, updateDepartmentDto) {
        return this.prismaService.department.update({
            where: { id },
            data: updateDepartmentDto,
        });
    }
    async remove(id) {
        return this.prismaService.department.delete({ where: { id } });
    }
};
DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], DepartmentsService);
exports.DepartmentsService = DepartmentsService;
//# sourceMappingURL=departments.service.js.map
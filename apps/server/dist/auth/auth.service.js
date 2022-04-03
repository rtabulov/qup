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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const credential = require("credential");
const lodash_1 = require("lodash");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async validateUser(user) {
        const foundUser = await this.prismaService.user.findUnique({
            where: { email: user.email },
            include: { role: true },
        });
        if (!foundUser || !(await verify(foundUser.password, user.password))) {
            throw new common_1.UnauthorizedException({
                password: 'Неверный email или пароль',
            });
        }
        if (!foundUser.active) {
            throw new common_1.UnauthorizedException({
                email: 'Ваш аккаунт еще не подтверждён, обратитесь к администратору',
            });
        }
        const { password: _password, active: _active } = foundUser, restUser = __rest(foundUser, ["password", "active"]);
        return restUser;
    }
    async registerUser(user) {
        const existingUser = await this.prismaService.user.findUnique({
            where: { email: user.email },
            include: { certificates: true, department: true },
        });
        if (existingUser) {
            throw new common_1.BadRequestException({
                email: "Пользователь с таким e-mail'ом уже зарегистрирован",
            });
        }
        if (user.password !== user.confirmationPassword) {
            throw new common_1.BadRequestException({
                confirmationPassword: 'Password and Confirmation Password must match',
            });
        }
        const created = await this.prismaService.user.create({
            data: Object.assign(Object.assign({}, (0, lodash_1.omit)(user, ['departmentId', 'confirmationPassword'])), { active: false, role: { connect: { key: 'teacher' } }, department: { connect: { id: user.departmentId } } }),
        });
        return this.prismaService.user.findUnique({
            where: { id: created.id },
            include: { certificates: true, department: true, role: true },
        });
    }
    async findTeachers() {
        return this.prismaService.user.findMany({
            where: { role: { key: 'teacher' } },
            include: { department: true },
        });
    }
    async updateUser(id, updateUserDto) {
        await this.prismaService.user.update({
            where: { id },
            data: updateUserDto,
        });
        return this.prismaService.user.findUnique({ where: { id } });
    }
    async findUsers() {
        return this.prismaService.user.findMany({
            where: { active: true },
            include: { role: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findInactiveUsers() {
        return this.prismaService.user.findMany({
            where: { active: false },
            include: { role: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async removeUser(id) {
        return this.prismaService.user.delete({ where: { id } });
    }
    async findById(id, { expand = false } = {}) {
        const user = await this.prismaService.user.findUnique({
            where: { id },
            include: expand && {
                certificates: { include: { files: true } },
                role: true,
            },
        });
        if (!user) {
            throw new common_1.BadRequestException(`No user found with id ${id}`);
        }
        const { password } = user, safe = __rest(user, ["password"]);
        return safe;
    }
    async getRoles() {
        return this.prismaService.role.findMany();
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
function verify(hash, pass) {
    return new Promise((resolve) => {
        credential().verify(hash, pass, (err, isValid) => resolve(isValid));
    });
}
//# sourceMappingURL=auth.service.js.map
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
exports.UploadsController = void 0;
const common_1 = require("@nestjs/common");
const supabase_1 = require("../supabase");
const file_meta_1 = require("../file-meta");
let UploadsController = class UploadsController {
    constructor(supabaseService, fileMetaService) {
        this.supabaseService = supabaseService;
        this.fileMetaService = fileMetaService;
    }
    async findCertificateFile(id, res) {
        let file;
        try {
            file = await this.fileMetaService.findOne(id);
        }
        catch (_a) {
            throw new common_1.NotFoundException();
        }
        const { data, error } = await this.supabaseService.storage
            .from('certificates')
            .download(file.name);
        if (error) {
            throw new common_1.NotFoundException();
        }
        const buf = await data.arrayBuffer();
        res.set('Content-Disposition', `inline; filename="${file.name}"`);
        res.type(file.mimetype);
        res.send(Buffer.from(buf));
    }
};
__decorate([
    (0, common_1.Get)('certificates/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "findCertificateFile", null);
UploadsController = __decorate([
    (0, common_1.Controller)('uploads'),
    __metadata("design:paramtypes", [supabase_1.SupabaseService,
        file_meta_1.FileMetaService])
], UploadsController);
exports.UploadsController = UploadsController;
//# sourceMappingURL=uploads.controller.js.map
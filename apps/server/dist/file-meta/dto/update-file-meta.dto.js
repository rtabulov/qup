"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFileMetaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_file_meta_dto_1 = require("./create-file-meta.dto");
class UpdateFileMetaDto extends (0, mapped_types_1.PartialType)(create_file_meta_dto_1.CreateFileMetaDto) {
}
exports.UpdateFileMetaDto = UpdateFileMetaDto;
//# sourceMappingURL=update-file-meta.dto.js.map
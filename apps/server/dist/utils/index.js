"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.resolveAuthLevel = void 0;
const credential = require("credential");
function resolveAuthLevel(userRole, target) {
    if (!userRole) {
        return false;
    }
    const ROLES_ARRAY = ['teacher', 'hr', 'departmentHead', 'admin'];
    const targetLevel = ROLES_ARRAY.findIndex((s) => s === target);
    const userLevel = ROLES_ARRAY.findIndex((s) => s === userRole);
    if (target === true) {
        return userLevel >= 0;
    }
    return userLevel >= targetLevel;
}
exports.resolveAuthLevel = resolveAuthLevel;
function hashPassword(password) {
    return new Promise((resolve, reject) => {
        credential().hash(password, function (err, hash) {
            if (err) {
                reject(err);
            }
            else {
                resolve(hash);
            }
        });
    });
}
exports.hashPassword = hashPassword;
//# sourceMappingURL=index.js.map
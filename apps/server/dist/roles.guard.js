"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowRoles = void 0;
const logged_in_guard_1 = require("./logged-in.guard");
function AllowRoles(...allowedRoles) {
    return class RolesGuard extends logged_in_guard_1.LoggedInGuard {
        canActivate(context) {
            const req = context.switchToHttp().getRequest();
            return (super.canActivate(context) &&
                allowedRoles.includes(req.session.passport.user.role));
        }
    };
}
exports.AllowRoles = AllowRoles;
//# sourceMappingURL=roles.guard.js.map
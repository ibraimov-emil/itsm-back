import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeRolesService } from "./employeeRoles.service";
import { EmployeeRolesControllerBase } from "./base/employeeRoles.controller.base";

@swagger.ApiTags("employeeRoles")
@common.Controller("employeeRoles")
export class EmployeeRolesController extends EmployeeRolesControllerBase {
  constructor(protected readonly service: EmployeeRolesService) {
    super(service);
  }
}

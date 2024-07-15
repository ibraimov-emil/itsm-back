import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeProjectsService } from "./employeeProjects.service";
import { EmployeeProjectsControllerBase } from "./base/employeeProjects.controller.base";

@swagger.ApiTags("employeeProjects")
@common.Controller("employeeProjects")
export class EmployeeProjectsController extends EmployeeProjectsControllerBase {
  constructor(protected readonly service: EmployeeProjectsService) {
    super(service);
  }
}

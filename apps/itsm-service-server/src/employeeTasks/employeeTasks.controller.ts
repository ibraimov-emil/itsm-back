import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeTasksService } from "./employeeTasks.service";
import { EmployeeTasksControllerBase } from "./base/employeeTasks.controller.base";

@swagger.ApiTags("employeeTasks")
@common.Controller("employeeTasks")
export class EmployeeTasksController extends EmployeeTasksControllerBase {
  constructor(protected readonly service: EmployeeTasksService) {
    super(service);
  }
}

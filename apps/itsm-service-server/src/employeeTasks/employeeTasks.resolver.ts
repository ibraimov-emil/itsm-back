import * as graphql from "@nestjs/graphql";
import { EmployeeTasksResolverBase } from "./base/employeeTasks.resolver.base";
import { EmployeeTasks } from "./base/EmployeeTasks";
import { EmployeeTasksService } from "./employeeTasks.service";

@graphql.Resolver(() => EmployeeTasks)
export class EmployeeTasksResolver extends EmployeeTasksResolverBase {
  constructor(protected readonly service: EmployeeTasksService) {
    super(service);
  }
}

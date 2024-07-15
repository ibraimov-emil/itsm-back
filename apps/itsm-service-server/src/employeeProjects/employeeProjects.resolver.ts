import * as graphql from "@nestjs/graphql";
import { EmployeeProjectsResolverBase } from "./base/employeeProjects.resolver.base";
import { EmployeeProjects } from "./base/EmployeeProjects";
import { EmployeeProjectsService } from "./employeeProjects.service";

@graphql.Resolver(() => EmployeeProjects)
export class EmployeeProjectsResolver extends EmployeeProjectsResolverBase {
  constructor(protected readonly service: EmployeeProjectsService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { EmployeeRolesResolverBase } from "./base/employeeRoles.resolver.base";
import { EmployeeRoles } from "./base/EmployeeRoles";
import { EmployeeRolesService } from "./employeeRoles.service";

@graphql.Resolver(() => EmployeeRoles)
export class EmployeeRolesResolver extends EmployeeRolesResolverBase {
  constructor(protected readonly service: EmployeeRolesService) {
    super(service);
  }
}

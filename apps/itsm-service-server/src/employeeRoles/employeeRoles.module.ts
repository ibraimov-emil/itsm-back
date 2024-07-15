import { Module } from "@nestjs/common";
import { EmployeeRolesModuleBase } from "./base/employeeRoles.module.base";
import { EmployeeRolesService } from "./employeeRoles.service";
import { EmployeeRolesController } from "./employeeRoles.controller";
import { EmployeeRolesResolver } from "./employeeRoles.resolver";

@Module({
  imports: [EmployeeRolesModuleBase],
  controllers: [EmployeeRolesController],
  providers: [EmployeeRolesService, EmployeeRolesResolver],
  exports: [EmployeeRolesService],
})
export class EmployeeRolesModule {}

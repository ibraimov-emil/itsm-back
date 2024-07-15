import { Module } from "@nestjs/common";
import { EmployeeProjectsModuleBase } from "./base/employeeProjects.module.base";
import { EmployeeProjectsService } from "./employeeProjects.service";
import { EmployeeProjectsController } from "./employeeProjects.controller";
import { EmployeeProjectsResolver } from "./employeeProjects.resolver";

@Module({
  imports: [EmployeeProjectsModuleBase],
  controllers: [EmployeeProjectsController],
  providers: [EmployeeProjectsService, EmployeeProjectsResolver],
  exports: [EmployeeProjectsService],
})
export class EmployeeProjectsModule {}

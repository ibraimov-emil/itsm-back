import { Module } from "@nestjs/common";
import { EmployeeTasksModuleBase } from "./base/employeeTasks.module.base";
import { EmployeeTasksService } from "./employeeTasks.service";
import { EmployeeTasksController } from "./employeeTasks.controller";
import { EmployeeTasksResolver } from "./employeeTasks.resolver";

@Module({
  imports: [EmployeeTasksModuleBase],
  controllers: [EmployeeTasksController],
  providers: [EmployeeTasksService, EmployeeTasksResolver],
  exports: [EmployeeTasksService],
})
export class EmployeeTasksModule {}

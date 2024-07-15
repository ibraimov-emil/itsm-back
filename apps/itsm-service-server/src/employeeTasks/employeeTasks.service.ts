import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeTasksServiceBase } from "./base/employeeTasks.service.base";

@Injectable()
export class EmployeeTasksService extends EmployeeTasksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

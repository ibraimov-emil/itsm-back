import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeProjectsServiceBase } from "./base/employeeProjects.service.base";

@Injectable()
export class EmployeeProjectsService extends EmployeeProjectsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

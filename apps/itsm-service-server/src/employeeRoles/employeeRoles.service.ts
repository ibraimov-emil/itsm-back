import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeRolesServiceBase } from "./base/employeeRoles.service.base";

@Injectable()
export class EmployeeRolesService extends EmployeeRolesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

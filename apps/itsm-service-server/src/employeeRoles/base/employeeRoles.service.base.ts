/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  EmployeeRoles as PrismaEmployeeRoles,
  Employees as PrismaEmployees,
  Roles as PrismaRoles,
} from "@prisma/client";

export class EmployeeRolesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmployeeRolesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.employeeRoles.count(args);
  }

  async employeeRolesItems(
    args: Prisma.EmployeeRolesFindManyArgs
  ): Promise<PrismaEmployeeRoles[]> {
    return this.prisma.employeeRoles.findMany(args);
  }
  async employeeRoles(
    args: Prisma.EmployeeRolesFindUniqueArgs
  ): Promise<PrismaEmployeeRoles | null> {
    return this.prisma.employeeRoles.findUnique(args);
  }
  async createEmployeeRoles(
    args: Prisma.EmployeeRolesCreateArgs
  ): Promise<PrismaEmployeeRoles> {
    return this.prisma.employeeRoles.create(args);
  }
  async updateEmployeeRoles(
    args: Prisma.EmployeeRolesUpdateArgs
  ): Promise<PrismaEmployeeRoles> {
    return this.prisma.employeeRoles.update(args);
  }
  async deleteEmployeeRoles(
    args: Prisma.EmployeeRolesDeleteArgs
  ): Promise<PrismaEmployeeRoles> {
    return this.prisma.employeeRoles.delete(args);
  }

  async getEmployee(parentId: string): Promise<PrismaEmployees | null> {
    return this.prisma.employeeRoles
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getRole(parentId: string): Promise<PrismaRoles | null> {
    return this.prisma.employeeRoles
      .findUnique({
        where: { id: parentId },
      })
      .role();
  }
}

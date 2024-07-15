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
  EmployeeProjects as PrismaEmployeeProjects,
  Employees as PrismaEmployees,
  Projects as PrismaProjects,
} from "@prisma/client";

export class EmployeeProjectsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmployeeProjectsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.employeeProjects.count(args);
  }

  async employeeProjectsItems(
    args: Prisma.EmployeeProjectsFindManyArgs
  ): Promise<PrismaEmployeeProjects[]> {
    return this.prisma.employeeProjects.findMany(args);
  }
  async employeeProjects(
    args: Prisma.EmployeeProjectsFindUniqueArgs
  ): Promise<PrismaEmployeeProjects | null> {
    return this.prisma.employeeProjects.findUnique(args);
  }
  async createEmployeeProjects(
    args: Prisma.EmployeeProjectsCreateArgs
  ): Promise<PrismaEmployeeProjects> {
    return this.prisma.employeeProjects.create(args);
  }
  async updateEmployeeProjects(
    args: Prisma.EmployeeProjectsUpdateArgs
  ): Promise<PrismaEmployeeProjects> {
    return this.prisma.employeeProjects.update(args);
  }
  async deleteEmployeeProjects(
    args: Prisma.EmployeeProjectsDeleteArgs
  ): Promise<PrismaEmployeeProjects> {
    return this.prisma.employeeProjects.delete(args);
  }

  async getEmployee(parentId: string): Promise<PrismaEmployees | null> {
    return this.prisma.employeeProjects
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getProject(parentId: string): Promise<PrismaProjects | null> {
    return this.prisma.employeeProjects
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }
}

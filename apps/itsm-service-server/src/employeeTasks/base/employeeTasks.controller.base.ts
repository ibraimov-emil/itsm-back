/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmployeeTasksService } from "../employeeTasks.service";
import { EmployeeTasksCreateInput } from "./EmployeeTasksCreateInput";
import { EmployeeTasks } from "./EmployeeTasks";
import { EmployeeTasksFindManyArgs } from "./EmployeeTasksFindManyArgs";
import { EmployeeTasksWhereUniqueInput } from "./EmployeeTasksWhereUniqueInput";
import { EmployeeTasksUpdateInput } from "./EmployeeTasksUpdateInput";

export class EmployeeTasksControllerBase {
  constructor(protected readonly service: EmployeeTasksService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeTasks })
  async createEmployeeTasks(
    @common.Body() data: EmployeeTasksCreateInput
  ): Promise<EmployeeTasks> {
    return await this.service.createEmployeeTasks({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,

        task: data.task
          ? {
              connect: data.task,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        task: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmployeeTasks] })
  @ApiNestedQuery(EmployeeTasksFindManyArgs)
  async employeeTasksItems(
    @common.Req() request: Request
  ): Promise<EmployeeTasks[]> {
    const args = plainToClass(EmployeeTasksFindManyArgs, request.query);
    return this.service.employeeTasksItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        task: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmployeeTasks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async employeeTasks(
    @common.Param() params: EmployeeTasksWhereUniqueInput
  ): Promise<EmployeeTasks | null> {
    const result = await this.service.employeeTasks({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        task: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EmployeeTasks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmployeeTasks(
    @common.Param() params: EmployeeTasksWhereUniqueInput,
    @common.Body() data: EmployeeTasksUpdateInput
  ): Promise<EmployeeTasks | null> {
    try {
      return await this.service.updateEmployeeTasks({
        where: params,
        data: {
          ...data,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,

          task: data.task
            ? {
                connect: data.task,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          task: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EmployeeTasks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmployeeTasks(
    @common.Param() params: EmployeeTasksWhereUniqueInput
  ): Promise<EmployeeTasks | null> {
    try {
      return await this.service.deleteEmployeeTasks({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          task: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

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
import { EmployeeRolesService } from "../employeeRoles.service";
import { EmployeeRolesCreateInput } from "./EmployeeRolesCreateInput";
import { EmployeeRoles } from "./EmployeeRoles";
import { EmployeeRolesFindManyArgs } from "./EmployeeRolesFindManyArgs";
import { EmployeeRolesWhereUniqueInput } from "./EmployeeRolesWhereUniqueInput";
import { EmployeeRolesUpdateInput } from "./EmployeeRolesUpdateInput";

export class EmployeeRolesControllerBase {
  constructor(protected readonly service: EmployeeRolesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeRoles })
  async createEmployeeRoles(
    @common.Body() data: EmployeeRolesCreateInput
  ): Promise<EmployeeRoles> {
    return await this.service.createEmployeeRoles({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,

        role: data.role
          ? {
              connect: data.role,
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

        role: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmployeeRoles] })
  @ApiNestedQuery(EmployeeRolesFindManyArgs)
  async employeeRolesItems(
    @common.Req() request: Request
  ): Promise<EmployeeRoles[]> {
    const args = plainToClass(EmployeeRolesFindManyArgs, request.query);
    return this.service.employeeRolesItems({
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

        role: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmployeeRoles })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async employeeRoles(
    @common.Param() params: EmployeeRolesWhereUniqueInput
  ): Promise<EmployeeRoles | null> {
    const result = await this.service.employeeRoles({
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

        role: {
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
  @swagger.ApiOkResponse({ type: EmployeeRoles })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmployeeRoles(
    @common.Param() params: EmployeeRolesWhereUniqueInput,
    @common.Body() data: EmployeeRolesUpdateInput
  ): Promise<EmployeeRoles | null> {
    try {
      return await this.service.updateEmployeeRoles({
        where: params,
        data: {
          ...data,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,

          role: data.role
            ? {
                connect: data.role,
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

          role: {
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
  @swagger.ApiOkResponse({ type: EmployeeRoles })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmployeeRoles(
    @common.Param() params: EmployeeRolesWhereUniqueInput
  ): Promise<EmployeeRoles | null> {
    try {
      return await this.service.deleteEmployeeRoles({
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

          role: {
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

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
import { ChatParticipantsService } from "../chatParticipants.service";
import { ChatParticipantsCreateInput } from "./ChatParticipantsCreateInput";
import { ChatParticipants } from "./ChatParticipants";
import { ChatParticipantsFindManyArgs } from "./ChatParticipantsFindManyArgs";
import { ChatParticipantsWhereUniqueInput } from "./ChatParticipantsWhereUniqueInput";
import { ChatParticipantsUpdateInput } from "./ChatParticipantsUpdateInput";

export class ChatParticipantsControllerBase {
  constructor(protected readonly service: ChatParticipantsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChatParticipants })
  async createChatParticipants(
    @common.Body() data: ChatParticipantsCreateInput
  ): Promise<ChatParticipants> {
    return await this.service.createChatParticipants({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ChatParticipants] })
  @ApiNestedQuery(ChatParticipantsFindManyArgs)
  async chatParticipantsItems(
    @common.Req() request: Request
  ): Promise<ChatParticipants[]> {
    const args = plainToClass(ChatParticipantsFindManyArgs, request.query);
    return this.service.chatParticipantsItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChatParticipants })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async chatParticipants(
    @common.Param() params: ChatParticipantsWhereUniqueInput
  ): Promise<ChatParticipants | null> {
    const result = await this.service.chatParticipants({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: ChatParticipants })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChatParticipants(
    @common.Param() params: ChatParticipantsWhereUniqueInput,
    @common.Body() data: ChatParticipantsUpdateInput
  ): Promise<ChatParticipants | null> {
    try {
      return await this.service.updateChatParticipants({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: ChatParticipants })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChatParticipants(
    @common.Param() params: ChatParticipantsWhereUniqueInput
  ): Promise<ChatParticipants | null> {
    try {
      return await this.service.deleteChatParticipants({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
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

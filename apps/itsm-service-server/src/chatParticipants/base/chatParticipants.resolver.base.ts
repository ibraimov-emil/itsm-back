/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ChatParticipants } from "./ChatParticipants";
import { ChatParticipantsCountArgs } from "./ChatParticipantsCountArgs";
import { ChatParticipantsFindManyArgs } from "./ChatParticipantsFindManyArgs";
import { ChatParticipantsFindUniqueArgs } from "./ChatParticipantsFindUniqueArgs";
import { DeleteChatParticipantsArgs } from "./DeleteChatParticipantsArgs";
import { ChatParticipantsService } from "../chatParticipants.service";
@graphql.Resolver(() => ChatParticipants)
export class ChatParticipantsResolverBase {
  constructor(protected readonly service: ChatParticipantsService) {}

  async _chatParticipantsItemsMeta(
    @graphql.Args() args: ChatParticipantsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ChatParticipants])
  async chatParticipantsItems(
    @graphql.Args() args: ChatParticipantsFindManyArgs
  ): Promise<ChatParticipants[]> {
    return this.service.chatParticipantsItems(args);
  }

  @graphql.Query(() => ChatParticipants, { nullable: true })
  async chatParticipants(
    @graphql.Args() args: ChatParticipantsFindUniqueArgs
  ): Promise<ChatParticipants | null> {
    const result = await this.service.chatParticipants(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ChatParticipants)
  async deleteChatParticipants(
    @graphql.Args() args: DeleteChatParticipantsArgs
  ): Promise<ChatParticipants | null> {
    try {
      return await this.service.deleteChatParticipants(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

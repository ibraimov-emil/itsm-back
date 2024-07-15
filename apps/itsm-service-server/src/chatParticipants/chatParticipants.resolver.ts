import * as graphql from "@nestjs/graphql";
import { ChatParticipantsResolverBase } from "./base/chatParticipants.resolver.base";
import { ChatParticipants } from "./base/ChatParticipants";
import { ChatParticipantsService } from "./chatParticipants.service";

@graphql.Resolver(() => ChatParticipants)
export class ChatParticipantsResolver extends ChatParticipantsResolverBase {
  constructor(protected readonly service: ChatParticipantsService) {
    super(service);
  }
}

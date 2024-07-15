import * as graphql from "@nestjs/graphql";
import { ChatsResolverBase } from "./base/chats.resolver.base";
import { Chats } from "./base/Chats";
import { ChatsService } from "./chats.service";

@graphql.Resolver(() => Chats)
export class ChatsResolver extends ChatsResolverBase {
  constructor(protected readonly service: ChatsService) {
    super(service);
  }
}

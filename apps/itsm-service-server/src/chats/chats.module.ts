import { Module } from "@nestjs/common";
import { ChatsModuleBase } from "./base/chats.module.base";
import { ChatsService } from "./chats.service";
import { ChatsController } from "./chats.controller";
import { ChatsResolver } from "./chats.resolver";

@Module({
  imports: [ChatsModuleBase],
  controllers: [ChatsController],
  providers: [ChatsService, ChatsResolver],
  exports: [ChatsService],
})
export class ChatsModule {}

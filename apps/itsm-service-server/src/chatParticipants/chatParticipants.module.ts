import { Module } from "@nestjs/common";
import { ChatParticipantsModuleBase } from "./base/chatParticipants.module.base";
import { ChatParticipantsService } from "./chatParticipants.service";
import { ChatParticipantsController } from "./chatParticipants.controller";
import { ChatParticipantsResolver } from "./chatParticipants.resolver";

@Module({
  imports: [ChatParticipantsModuleBase],
  controllers: [ChatParticipantsController],
  providers: [ChatParticipantsService, ChatParticipantsResolver],
  exports: [ChatParticipantsService],
})
export class ChatParticipantsModule {}

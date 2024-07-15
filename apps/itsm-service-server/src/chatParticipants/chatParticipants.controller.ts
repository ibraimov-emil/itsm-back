import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatParticipantsService } from "./chatParticipants.service";
import { ChatParticipantsControllerBase } from "./base/chatParticipants.controller.base";

@swagger.ApiTags("chatParticipants")
@common.Controller("chatParticipants")
export class ChatParticipantsController extends ChatParticipantsControllerBase {
  constructor(protected readonly service: ChatParticipantsService) {
    super(service);
  }
}

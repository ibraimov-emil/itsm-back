import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatParticipantsServiceBase } from "./base/chatParticipants.service.base";

@Injectable()
export class ChatParticipantsService extends ChatParticipantsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

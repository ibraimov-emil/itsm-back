import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatsServiceBase } from "./base/chats.service.base";

@Injectable()
export class ChatsService extends ChatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatusesServiceBase } from "./base/statuses.service.base";

@Injectable()
export class StatusesService extends StatusesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

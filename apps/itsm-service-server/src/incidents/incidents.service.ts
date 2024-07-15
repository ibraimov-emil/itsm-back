import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncidentsServiceBase } from "./base/incidents.service.base";

@Injectable()
export class IncidentsService extends IncidentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

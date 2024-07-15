import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DevelopmentStagesServiceBase } from "./base/developmentStages.service.base";

@Injectable()
export class DevelopmentStagesService extends DevelopmentStagesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

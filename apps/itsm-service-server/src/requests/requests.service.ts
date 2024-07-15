import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RequestsServiceBase } from "./base/requests.service.base";

@Injectable()
export class RequestsService extends RequestsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Module } from "@nestjs/common";
import { RequestsModuleBase } from "./base/requests.module.base";
import { RequestsService } from "./requests.service";
import { RequestsController } from "./requests.controller";
import { RequestsResolver } from "./requests.resolver";

@Module({
  imports: [RequestsModuleBase],
  controllers: [RequestsController],
  providers: [RequestsService, RequestsResolver],
  exports: [RequestsService],
})
export class RequestsModule {}

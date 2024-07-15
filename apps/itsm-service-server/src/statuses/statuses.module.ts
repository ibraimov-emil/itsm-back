import { Module } from "@nestjs/common";
import { StatusesModuleBase } from "./base/statuses.module.base";
import { StatusesService } from "./statuses.service";
import { StatusesController } from "./statuses.controller";
import { StatusesResolver } from "./statuses.resolver";

@Module({
  imports: [StatusesModuleBase],
  controllers: [StatusesController],
  providers: [StatusesService, StatusesResolver],
  exports: [StatusesService],
})
export class StatusesModule {}

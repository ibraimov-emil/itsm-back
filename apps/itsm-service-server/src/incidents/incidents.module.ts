import { Module } from "@nestjs/common";
import { IncidentsModuleBase } from "./base/incidents.module.base";
import { IncidentsService } from "./incidents.service";
import { IncidentsController } from "./incidents.controller";
import { IncidentsResolver } from "./incidents.resolver";

@Module({
  imports: [IncidentsModuleBase],
  controllers: [IncidentsController],
  providers: [IncidentsService, IncidentsResolver],
  exports: [IncidentsService],
})
export class IncidentsModule {}

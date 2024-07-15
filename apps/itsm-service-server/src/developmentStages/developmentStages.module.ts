import { Module } from "@nestjs/common";
import { DevelopmentStagesModuleBase } from "./base/developmentStages.module.base";
import { DevelopmentStagesService } from "./developmentStages.service";
import { DevelopmentStagesController } from "./developmentStages.controller";
import { DevelopmentStagesResolver } from "./developmentStages.resolver";

@Module({
  imports: [DevelopmentStagesModuleBase],
  controllers: [DevelopmentStagesController],
  providers: [DevelopmentStagesService, DevelopmentStagesResolver],
  exports: [DevelopmentStagesService],
})
export class DevelopmentStagesModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DevelopmentStagesService } from "./developmentStages.service";
import { DevelopmentStagesControllerBase } from "./base/developmentStages.controller.base";

@swagger.ApiTags("developmentStages")
@common.Controller("developmentStages")
export class DevelopmentStagesController extends DevelopmentStagesControllerBase {
  constructor(protected readonly service: DevelopmentStagesService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatusesService } from "./statuses.service";
import { StatusesControllerBase } from "./base/statuses.controller.base";

@swagger.ApiTags("statuses")
@common.Controller("statuses")
export class StatusesController extends StatusesControllerBase {
  constructor(protected readonly service: StatusesService) {
    super(service);
  }
}

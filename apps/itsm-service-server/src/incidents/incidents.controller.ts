import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IncidentsService } from "./incidents.service";
import { IncidentsControllerBase } from "./base/incidents.controller.base";

@swagger.ApiTags("incidents")
@common.Controller("incidents")
export class IncidentsController extends IncidentsControllerBase {
  constructor(protected readonly service: IncidentsService) {
    super(service);
  }
}

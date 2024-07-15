import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestsService } from "./requests.service";
import { RequestsControllerBase } from "./base/requests.controller.base";

@swagger.ApiTags("requests")
@common.Controller("requests")
export class RequestsController extends RequestsControllerBase {
  constructor(protected readonly service: RequestsService) {
    super(service);
  }
}

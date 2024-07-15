import * as graphql from "@nestjs/graphql";
import { RequestsResolverBase } from "./base/requests.resolver.base";
import { Requests } from "./base/Requests";
import { RequestsService } from "./requests.service";

@graphql.Resolver(() => Requests)
export class RequestsResolver extends RequestsResolverBase {
  constructor(protected readonly service: RequestsService) {
    super(service);
  }
}

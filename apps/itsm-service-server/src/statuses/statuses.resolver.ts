import * as graphql from "@nestjs/graphql";
import { StatusesResolverBase } from "./base/statuses.resolver.base";
import { Statuses } from "./base/Statuses";
import { StatusesService } from "./statuses.service";

@graphql.Resolver(() => Statuses)
export class StatusesResolver extends StatusesResolverBase {
  constructor(protected readonly service: StatusesService) {
    super(service);
  }
}

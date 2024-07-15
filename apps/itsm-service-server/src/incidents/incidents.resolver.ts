import * as graphql from "@nestjs/graphql";
import { IncidentsResolverBase } from "./base/incidents.resolver.base";
import { Incidents } from "./base/Incidents";
import { IncidentsService } from "./incidents.service";

@graphql.Resolver(() => Incidents)
export class IncidentsResolver extends IncidentsResolverBase {
  constructor(protected readonly service: IncidentsService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { DevelopmentStagesResolverBase } from "./base/developmentStages.resolver.base";
import { DevelopmentStages } from "./base/DevelopmentStages";
import { DevelopmentStagesService } from "./developmentStages.service";

@graphql.Resolver(() => DevelopmentStages)
export class DevelopmentStagesResolver extends DevelopmentStagesResolverBase {
  constructor(protected readonly service: DevelopmentStagesService) {
    super(service);
  }
}

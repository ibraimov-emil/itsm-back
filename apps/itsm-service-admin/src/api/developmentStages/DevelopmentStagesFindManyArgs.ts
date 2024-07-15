import { DevelopmentStagesWhereInput } from "./DevelopmentStagesWhereInput";
import { DevelopmentStagesOrderByInput } from "./DevelopmentStagesOrderByInput";

export type DevelopmentStagesFindManyArgs = {
  where?: DevelopmentStagesWhereInput;
  orderBy?: Array<DevelopmentStagesOrderByInput>;
  skip?: number;
  take?: number;
};

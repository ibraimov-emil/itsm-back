import { IncidentsWhereInput } from "./IncidentsWhereInput";
import { IncidentsOrderByInput } from "./IncidentsOrderByInput";

export type IncidentsFindManyArgs = {
  where?: IncidentsWhereInput;
  orderBy?: Array<IncidentsOrderByInput>;
  skip?: number;
  take?: number;
};

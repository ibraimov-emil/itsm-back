import { RequestsWhereInput } from "./RequestsWhereInput";
import { RequestsOrderByInput } from "./RequestsOrderByInput";

export type RequestsFindManyArgs = {
  where?: RequestsWhereInput;
  orderBy?: Array<RequestsOrderByInput>;
  skip?: number;
  take?: number;
};

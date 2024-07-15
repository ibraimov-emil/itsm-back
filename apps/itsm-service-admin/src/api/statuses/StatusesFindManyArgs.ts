import { StatusesWhereInput } from "./StatusesWhereInput";
import { StatusesOrderByInput } from "./StatusesOrderByInput";

export type StatusesFindManyArgs = {
  where?: StatusesWhereInput;
  orderBy?: Array<StatusesOrderByInput>;
  skip?: number;
  take?: number;
};

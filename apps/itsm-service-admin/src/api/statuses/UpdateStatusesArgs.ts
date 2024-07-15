import { StatusesWhereUniqueInput } from "./StatusesWhereUniqueInput";
import { StatusesUpdateInput } from "./StatusesUpdateInput";

export type UpdateStatusesArgs = {
  where: StatusesWhereUniqueInput;
  data: StatusesUpdateInput;
};

import { SortOrder } from "../../util/SortOrder";

export type TasksOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  serviceId?: SortOrder;
  developmentStageId?: SortOrder;
};

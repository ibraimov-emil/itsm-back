import { SortOrder } from "../../util/SortOrder";

export type ProjectsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  serviceId?: SortOrder;
  clientId?: SortOrder;
  statusId?: SortOrder;
  requestId?: SortOrder;
};

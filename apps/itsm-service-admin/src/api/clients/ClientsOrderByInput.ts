import { SortOrder } from "../../util/SortOrder";

export type ClientsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

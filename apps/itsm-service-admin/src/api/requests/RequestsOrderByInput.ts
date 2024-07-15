import { SortOrder } from "../../util/SortOrder";

export type RequestsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};

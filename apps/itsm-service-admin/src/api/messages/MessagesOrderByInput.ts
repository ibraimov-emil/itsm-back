import { SortOrder } from "../../util/SortOrder";

export type MessagesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};

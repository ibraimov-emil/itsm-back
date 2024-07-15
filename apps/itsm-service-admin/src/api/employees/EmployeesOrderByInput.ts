import { SortOrder } from "../../util/SortOrder";

export type EmployeesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

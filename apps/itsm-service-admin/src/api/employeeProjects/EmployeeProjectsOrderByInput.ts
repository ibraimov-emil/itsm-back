import { SortOrder } from "../../util/SortOrder";

export type EmployeeProjectsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  employeeId?: SortOrder;
  projectId?: SortOrder;
};

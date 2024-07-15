import { SortOrder } from "../../util/SortOrder";

export type EmployeeTasksOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  employeeId?: SortOrder;
  taskId?: SortOrder;
};

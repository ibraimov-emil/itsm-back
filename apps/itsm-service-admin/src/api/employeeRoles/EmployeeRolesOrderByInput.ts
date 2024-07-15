import { SortOrder } from "../../util/SortOrder";

export type EmployeeRolesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  employeeId?: SortOrder;
  roleId?: SortOrder;
};

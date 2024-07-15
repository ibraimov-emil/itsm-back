import { EmployeeRolesWhereInput } from "./EmployeeRolesWhereInput";
import { EmployeeRolesOrderByInput } from "./EmployeeRolesOrderByInput";

export type EmployeeRolesFindManyArgs = {
  where?: EmployeeRolesWhereInput;
  orderBy?: Array<EmployeeRolesOrderByInput>;
  skip?: number;
  take?: number;
};

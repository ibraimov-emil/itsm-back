import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { RolesWhereUniqueInput } from "../roles/RolesWhereUniqueInput";

export type EmployeeRolesCreateInput = {
  employee?: EmployeesWhereUniqueInput | null;
  role?: RolesWhereUniqueInput | null;
};

import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { RolesWhereUniqueInput } from "../roles/RolesWhereUniqueInput";

export type EmployeeRolesUpdateInput = {
  employee?: EmployeesWhereUniqueInput | null;
  role?: RolesWhereUniqueInput | null;
};

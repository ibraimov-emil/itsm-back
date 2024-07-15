import { StringFilter } from "../../util/StringFilter";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { RolesWhereUniqueInput } from "../roles/RolesWhereUniqueInput";

export type EmployeeRolesWhereInput = {
  id?: StringFilter;
  employee?: EmployeesWhereUniqueInput;
  role?: RolesWhereUniqueInput;
};

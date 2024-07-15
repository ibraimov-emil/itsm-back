import { StringFilter } from "../../util/StringFilter";
import { EmployeeRolesListRelationFilter } from "../employeeRoles/EmployeeRolesListRelationFilter";

export type RolesWhereInput = {
  id?: StringFilter;
  employeeRolesItems?: EmployeeRolesListRelationFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeProjectsListRelationFilter } from "../employeeProjects/EmployeeProjectsListRelationFilter";
import { EmployeeRolesListRelationFilter } from "../employeeRoles/EmployeeRolesListRelationFilter";
import { EmployeeTasksListRelationFilter } from "../employeeTasks/EmployeeTasksListRelationFilter";

export type EmployeesWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  employeeProjectsItems?: EmployeeProjectsListRelationFilter;
  employeeRolesItems?: EmployeeRolesListRelationFilter;
  employeeTasksItems?: EmployeeTasksListRelationFilter;
};

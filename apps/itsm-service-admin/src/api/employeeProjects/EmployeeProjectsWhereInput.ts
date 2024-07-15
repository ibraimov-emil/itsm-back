import { StringFilter } from "../../util/StringFilter";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type EmployeeProjectsWhereInput = {
  id?: StringFilter;
  employee?: EmployeesWhereUniqueInput;
  project?: ProjectsWhereUniqueInput;
};

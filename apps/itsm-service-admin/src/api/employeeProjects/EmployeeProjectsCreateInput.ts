import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type EmployeeProjectsCreateInput = {
  employee?: EmployeesWhereUniqueInput | null;
  project?: ProjectsWhereUniqueInput | null;
};

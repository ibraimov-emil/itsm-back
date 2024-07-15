import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type EmployeeProjectsUpdateInput = {
  employee?: EmployeesWhereUniqueInput | null;
  project?: ProjectsWhereUniqueInput | null;
};

import { User } from "../user/User";
import { EmployeeProjects } from "../employeeProjects/EmployeeProjects";
import { EmployeeRoles } from "../employeeRoles/EmployeeRoles";
import { EmployeeTasks } from "../employeeTasks/EmployeeTasks";

export type Employees = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  employeeProjectsItems?: Array<EmployeeProjects>;
  employeeRolesItems?: Array<EmployeeRoles>;
  employeeTasksItems?: Array<EmployeeTasks>;
};

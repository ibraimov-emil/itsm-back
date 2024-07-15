import { Employees } from "../employees/Employees";
import { Projects } from "../projects/Projects";

export type EmployeeProjects = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  employee?: Employees | null;
  project?: Projects | null;
};

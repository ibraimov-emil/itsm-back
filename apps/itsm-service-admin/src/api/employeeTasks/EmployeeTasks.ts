import { Employees } from "../employees/Employees";
import { Tasks } from "../tasks/Tasks";

export type EmployeeTasks = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  employee?: Employees | null;
  task?: Tasks | null;
};

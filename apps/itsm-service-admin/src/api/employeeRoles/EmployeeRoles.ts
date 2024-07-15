import { Employees } from "../employees/Employees";
import { Roles } from "../roles/Roles";

export type EmployeeRoles = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  employee?: Employees | null;
  role?: Roles | null;
};

import { EmployeeRoles } from "../employeeRoles/EmployeeRoles";

export type Roles = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  employeeRolesItems?: Array<EmployeeRoles>;
};

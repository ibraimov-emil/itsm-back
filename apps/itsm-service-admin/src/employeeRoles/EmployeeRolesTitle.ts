import { EmployeeRoles as TEmployeeRoles } from "../api/employeeRoles/EmployeeRoles";

export const EMPLOYEEROLES_TITLE_FIELD = "id";

export const EmployeeRolesTitle = (record: TEmployeeRoles): string => {
  return record.id?.toString() || String(record.id);
};

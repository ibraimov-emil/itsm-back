import { Employees as TEmployees } from "../api/employees/Employees";

export const EMPLOYEES_TITLE_FIELD = "id";

export const EmployeesTitle = (record: TEmployees): string => {
  return record.id?.toString() || String(record.id);
};

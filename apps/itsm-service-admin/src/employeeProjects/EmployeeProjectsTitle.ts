import { EmployeeProjects as TEmployeeProjects } from "../api/employeeProjects/EmployeeProjects";

export const EMPLOYEEPROJECTS_TITLE_FIELD = "id";

export const EmployeeProjectsTitle = (record: TEmployeeProjects): string => {
  return record.id?.toString() || String(record.id);
};

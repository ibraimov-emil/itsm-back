import { EmployeeTasks as TEmployeeTasks } from "../api/employeeTasks/EmployeeTasks";

export const EMPLOYEETASKS_TITLE_FIELD = "id";

export const EmployeeTasksTitle = (record: TEmployeeTasks): string => {
  return record.id?.toString() || String(record.id);
};

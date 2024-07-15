import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { TasksWhereUniqueInput } from "../tasks/TasksWhereUniqueInput";

export type EmployeeTasksCreateInput = {
  employee?: EmployeesWhereUniqueInput | null;
  task?: TasksWhereUniqueInput | null;
};

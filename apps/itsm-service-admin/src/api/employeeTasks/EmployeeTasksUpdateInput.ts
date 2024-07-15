import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { TasksWhereUniqueInput } from "../tasks/TasksWhereUniqueInput";

export type EmployeeTasksUpdateInput = {
  employee?: EmployeesWhereUniqueInput | null;
  task?: TasksWhereUniqueInput | null;
};

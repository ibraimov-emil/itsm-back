import { StringFilter } from "../../util/StringFilter";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { TasksWhereUniqueInput } from "../tasks/TasksWhereUniqueInput";

export type EmployeeTasksWhereInput = {
  id?: StringFilter;
  employee?: EmployeesWhereUniqueInput;
  task?: TasksWhereUniqueInput;
};

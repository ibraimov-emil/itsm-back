import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeProjectsUpdateManyWithoutEmployeesItemsInput } from "./EmployeeProjectsUpdateManyWithoutEmployeesItemsInput";
import { EmployeeRolesUpdateManyWithoutEmployeesItemsInput } from "./EmployeeRolesUpdateManyWithoutEmployeesItemsInput";
import { EmployeeTasksUpdateManyWithoutEmployeesItemsInput } from "./EmployeeTasksUpdateManyWithoutEmployeesItemsInput";

export type EmployeesUpdateInput = {
  user?: UserWhereUniqueInput | null;
  employeeProjectsItems?: EmployeeProjectsUpdateManyWithoutEmployeesItemsInput;
  employeeRolesItems?: EmployeeRolesUpdateManyWithoutEmployeesItemsInput;
  employeeTasksItems?: EmployeeTasksUpdateManyWithoutEmployeesItemsInput;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeProjectsCreateNestedManyWithoutEmployeesItemsInput } from "./EmployeeProjectsCreateNestedManyWithoutEmployeesItemsInput";
import { EmployeeRolesCreateNestedManyWithoutEmployeesItemsInput } from "./EmployeeRolesCreateNestedManyWithoutEmployeesItemsInput";
import { EmployeeTasksCreateNestedManyWithoutEmployeesItemsInput } from "./EmployeeTasksCreateNestedManyWithoutEmployeesItemsInput";

export type EmployeesCreateInput = {
  user?: UserWhereUniqueInput | null;
  employeeProjectsItems?: EmployeeProjectsCreateNestedManyWithoutEmployeesItemsInput;
  employeeRolesItems?: EmployeeRolesCreateNestedManyWithoutEmployeesItemsInput;
  employeeTasksItems?: EmployeeTasksCreateNestedManyWithoutEmployeesItemsInput;
};

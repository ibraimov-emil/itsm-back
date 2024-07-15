import { InputJsonValue } from "../../types";
import { EmployeesCreateNestedManyWithoutUsersInput } from "./EmployeesCreateNestedManyWithoutUsersInput";
import { ClientsCreateNestedManyWithoutUsersInput } from "./ClientsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  employeesItems?: EmployeesCreateNestedManyWithoutUsersInput;
  clientsItems?: ClientsCreateNestedManyWithoutUsersInput;
};

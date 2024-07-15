import { InputJsonValue } from "../../types";
import { EmployeesUpdateManyWithoutUsersInput } from "./EmployeesUpdateManyWithoutUsersInput";
import { ClientsUpdateManyWithoutUsersInput } from "./ClientsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  employeesItems?: EmployeesUpdateManyWithoutUsersInput;
  clientsItems?: ClientsUpdateManyWithoutUsersInput;
};

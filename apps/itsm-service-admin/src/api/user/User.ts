import { JsonValue } from "type-fest";
import { Employees } from "../employees/Employees";
import { Clients } from "../clients/Clients";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  employeesItems?: Array<Employees>;
  clientsItems?: Array<Clients>;
};

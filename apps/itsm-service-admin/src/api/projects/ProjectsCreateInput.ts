import { EmployeeProjectsCreateNestedManyWithoutProjectsItemsInput } from "./EmployeeProjectsCreateNestedManyWithoutProjectsItemsInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { StatusesWhereUniqueInput } from "../statuses/StatusesWhereUniqueInput";
import { RequestsWhereUniqueInput } from "../requests/RequestsWhereUniqueInput";

export type ProjectsCreateInput = {
  employeeProjectsItems?: EmployeeProjectsCreateNestedManyWithoutProjectsItemsInput;
  service?: ServicesWhereUniqueInput | null;
  client?: ClientsWhereUniqueInput | null;
  status?: StatusesWhereUniqueInput | null;
  request?: RequestsWhereUniqueInput | null;
};

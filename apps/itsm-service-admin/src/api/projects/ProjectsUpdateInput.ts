import { EmployeeProjectsUpdateManyWithoutProjectsItemsInput } from "./EmployeeProjectsUpdateManyWithoutProjectsItemsInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { StatusesWhereUniqueInput } from "../statuses/StatusesWhereUniqueInput";
import { RequestsWhereUniqueInput } from "../requests/RequestsWhereUniqueInput";

export type ProjectsUpdateInput = {
  employeeProjectsItems?: EmployeeProjectsUpdateManyWithoutProjectsItemsInput;
  service?: ServicesWhereUniqueInput | null;
  client?: ClientsWhereUniqueInput | null;
  status?: StatusesWhereUniqueInput | null;
  request?: RequestsWhereUniqueInput | null;
};

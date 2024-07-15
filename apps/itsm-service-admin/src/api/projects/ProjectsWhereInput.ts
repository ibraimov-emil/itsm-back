import { StringFilter } from "../../util/StringFilter";
import { EmployeeProjectsListRelationFilter } from "../employeeProjects/EmployeeProjectsListRelationFilter";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { StatusesWhereUniqueInput } from "../statuses/StatusesWhereUniqueInput";
import { RequestsWhereUniqueInput } from "../requests/RequestsWhereUniqueInput";

export type ProjectsWhereInput = {
  id?: StringFilter;
  employeeProjectsItems?: EmployeeProjectsListRelationFilter;
  service?: ServicesWhereUniqueInput;
  client?: ClientsWhereUniqueInput;
  status?: StatusesWhereUniqueInput;
  request?: RequestsWhereUniqueInput;
};

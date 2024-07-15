import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeesListRelationFilter } from "../employees/EmployeesListRelationFilter";
import { ClientsListRelationFilter } from "../clients/ClientsListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  employeesItems?: EmployeesListRelationFilter;
  clientsItems?: ClientsListRelationFilter;
};

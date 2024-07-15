import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectsListRelationFilter } from "../projects/ProjectsListRelationFilter";

export type ClientsWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  projectsItems?: ProjectsListRelationFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { ProjectsListRelationFilter } from "../projects/ProjectsListRelationFilter";

export type RequestsWhereInput = {
  id?: StringFilter;
  projectsItems?: ProjectsListRelationFilter;
};

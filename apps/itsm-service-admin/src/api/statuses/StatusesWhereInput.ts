import { StringFilter } from "../../util/StringFilter";
import { ProjectsListRelationFilter } from "../projects/ProjectsListRelationFilter";

export type StatusesWhereInput = {
  id?: StringFilter;
  projectsItems?: ProjectsListRelationFilter;
};

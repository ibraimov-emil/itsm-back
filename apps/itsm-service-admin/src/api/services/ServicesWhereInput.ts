import { StringFilter } from "../../util/StringFilter";
import { ProjectsListRelationFilter } from "../projects/ProjectsListRelationFilter";
import { TasksListRelationFilter } from "../tasks/TasksListRelationFilter";

export type ServicesWhereInput = {
  id?: StringFilter;
  projectsItems?: ProjectsListRelationFilter;
  tasksItems?: TasksListRelationFilter;
};

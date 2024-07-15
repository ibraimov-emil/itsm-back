import { StringFilter } from "../../util/StringFilter";
import { TasksListRelationFilter } from "../tasks/TasksListRelationFilter";

export type DevelopmentStagesWhereInput = {
  id?: StringFilter;
  tasksItems?: TasksListRelationFilter;
};

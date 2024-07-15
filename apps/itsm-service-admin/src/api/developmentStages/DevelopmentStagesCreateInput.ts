import { TasksCreateNestedManyWithoutDevelopmentStagesItemsInput } from "./TasksCreateNestedManyWithoutDevelopmentStagesItemsInput";

export type DevelopmentStagesCreateInput = {
  tasksItems?: TasksCreateNestedManyWithoutDevelopmentStagesItemsInput;
};

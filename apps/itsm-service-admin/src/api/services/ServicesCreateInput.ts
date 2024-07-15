import { ProjectsCreateNestedManyWithoutServicesItemsInput } from "./ProjectsCreateNestedManyWithoutServicesItemsInput";
import { TasksCreateNestedManyWithoutServicesItemsInput } from "./TasksCreateNestedManyWithoutServicesItemsInput";

export type ServicesCreateInput = {
  projectsItems?: ProjectsCreateNestedManyWithoutServicesItemsInput;
  tasksItems?: TasksCreateNestedManyWithoutServicesItemsInput;
};

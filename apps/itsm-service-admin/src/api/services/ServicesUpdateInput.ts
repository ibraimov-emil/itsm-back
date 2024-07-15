import { ProjectsUpdateManyWithoutServicesItemsInput } from "./ProjectsUpdateManyWithoutServicesItemsInput";
import { TasksUpdateManyWithoutServicesItemsInput } from "./TasksUpdateManyWithoutServicesItemsInput";

export type ServicesUpdateInput = {
  projectsItems?: ProjectsUpdateManyWithoutServicesItemsInput;
  tasksItems?: TasksUpdateManyWithoutServicesItemsInput;
};

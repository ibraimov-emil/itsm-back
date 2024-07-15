import { Projects } from "../projects/Projects";
import { Tasks } from "../tasks/Tasks";

export type Services = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  projectsItems?: Array<Projects>;
  tasksItems?: Array<Tasks>;
};

import { Tasks } from "../tasks/Tasks";

export type DevelopmentStages = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tasksItems?: Array<Tasks>;
};

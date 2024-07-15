import { Projects } from "../projects/Projects";

export type Statuses = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  projectsItems?: Array<Projects>;
};

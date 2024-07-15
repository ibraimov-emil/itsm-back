import { Projects } from "../projects/Projects";

export type Requests = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  projectsItems?: Array<Projects>;
};

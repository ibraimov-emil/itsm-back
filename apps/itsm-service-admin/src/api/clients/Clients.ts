import { User } from "../user/User";
import { Projects } from "../projects/Projects";

export type Clients = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  projectsItems?: Array<Projects>;
};

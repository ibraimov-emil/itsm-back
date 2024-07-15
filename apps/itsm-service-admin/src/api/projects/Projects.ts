import { EmployeeProjects } from "../employeeProjects/EmployeeProjects";
import { Services } from "../services/Services";
import { Clients } from "../clients/Clients";
import { Statuses } from "../statuses/Statuses";
import { Requests } from "../requests/Requests";

export type Projects = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  employeeProjectsItems?: Array<EmployeeProjects>;
  service?: Services | null;
  client?: Clients | null;
  status?: Statuses | null;
  request?: Requests | null;
};

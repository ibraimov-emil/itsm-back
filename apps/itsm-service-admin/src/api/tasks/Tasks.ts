import { EmployeeTasks } from "../employeeTasks/EmployeeTasks";
import { Services } from "../services/Services";
import { DevelopmentStages } from "../developmentStages/DevelopmentStages";

export type Tasks = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  employeeTasksItems?: Array<EmployeeTasks>;
  service?: Services | null;
  developmentStage?: DevelopmentStages | null;
};

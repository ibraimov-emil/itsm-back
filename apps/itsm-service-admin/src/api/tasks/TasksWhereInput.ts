import { StringFilter } from "../../util/StringFilter";
import { EmployeeTasksListRelationFilter } from "../employeeTasks/EmployeeTasksListRelationFilter";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { DevelopmentStagesWhereUniqueInput } from "../developmentStages/DevelopmentStagesWhereUniqueInput";

export type TasksWhereInput = {
  id?: StringFilter;
  employeeTasksItems?: EmployeeTasksListRelationFilter;
  service?: ServicesWhereUniqueInput;
  developmentStage?: DevelopmentStagesWhereUniqueInput;
};

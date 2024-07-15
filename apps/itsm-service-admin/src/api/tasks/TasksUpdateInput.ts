import { EmployeeTasksUpdateManyWithoutTasksItemsInput } from "./EmployeeTasksUpdateManyWithoutTasksItemsInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { DevelopmentStagesWhereUniqueInput } from "../developmentStages/DevelopmentStagesWhereUniqueInput";

export type TasksUpdateInput = {
  employeeTasksItems?: EmployeeTasksUpdateManyWithoutTasksItemsInput;
  service?: ServicesWhereUniqueInput | null;
  developmentStage?: DevelopmentStagesWhereUniqueInput | null;
};

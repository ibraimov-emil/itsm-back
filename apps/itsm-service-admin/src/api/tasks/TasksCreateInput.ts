import { EmployeeTasksCreateNestedManyWithoutTasksItemsInput } from "./EmployeeTasksCreateNestedManyWithoutTasksItemsInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { DevelopmentStagesWhereUniqueInput } from "../developmentStages/DevelopmentStagesWhereUniqueInput";

export type TasksCreateInput = {
  employeeTasksItems?: EmployeeTasksCreateNestedManyWithoutTasksItemsInput;
  service?: ServicesWhereUniqueInput | null;
  developmentStage?: DevelopmentStagesWhereUniqueInput | null;
};

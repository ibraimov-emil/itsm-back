import { EmployeeTasksWhereInput } from "./EmployeeTasksWhereInput";
import { EmployeeTasksOrderByInput } from "./EmployeeTasksOrderByInput";

export type EmployeeTasksFindManyArgs = {
  where?: EmployeeTasksWhereInput;
  orderBy?: Array<EmployeeTasksOrderByInput>;
  skip?: number;
  take?: number;
};

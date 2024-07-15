import { EmployeeProjectsWhereInput } from "./EmployeeProjectsWhereInput";
import { EmployeeProjectsOrderByInput } from "./EmployeeProjectsOrderByInput";

export type EmployeeProjectsFindManyArgs = {
  where?: EmployeeProjectsWhereInput;
  orderBy?: Array<EmployeeProjectsOrderByInput>;
  skip?: number;
  take?: number;
};

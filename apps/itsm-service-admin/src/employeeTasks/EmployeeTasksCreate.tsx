import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeesTitle } from "../employees/EmployeesTitle";
import { TasksTitle } from "../tasks/TasksTitle";

export const EmployeeTasksCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employees"
          label="Employee"
        >
          <SelectInput optionText={EmployeesTitle} />
        </ReferenceInput>
        <ReferenceInput source="task.id" reference="Tasks" label="Task">
          <SelectInput optionText={TasksTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

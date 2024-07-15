import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeesTitle } from "../employees/EmployeesTitle";
import { TasksTitle } from "../tasks/TasksTitle";

export const EmployeeTasksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

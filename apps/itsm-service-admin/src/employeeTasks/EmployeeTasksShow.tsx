import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { EMPLOYEES_TITLE_FIELD } from "../employees/EmployeesTitle";
import { TASKS_TITLE_FIELD } from "../tasks/TasksTitle";

export const EmployeeTasksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Employee"
          source="employees.id"
          reference="Employees"
        >
          <TextField source={EMPLOYEES_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Task" source="tasks.id" reference="Tasks">
          <TextField source={TASKS_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

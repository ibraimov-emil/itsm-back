import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEES_TITLE_FIELD } from "../employees/EmployeesTitle";
import { TASKS_TITLE_FIELD } from "./TasksTitle";
import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";
import { DEVELOPMENTSTAGES_TITLE_FIELD } from "../developmentStages/DevelopmentStagesTitle";

export const TasksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Service"
          source="services.id"
          reference="Services"
        >
          <TextField source={SERVICES_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="DevelopmentStage"
          source="developmentstages.id"
          reference="DevelopmentStages"
        >
          <TextField source={DEVELOPMENTSTAGES_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="EmployeeTasks"
          target="taskId"
          label="EmployeeTasksItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

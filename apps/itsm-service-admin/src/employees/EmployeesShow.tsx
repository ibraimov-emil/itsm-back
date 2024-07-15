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

import { EMPLOYEES_TITLE_FIELD } from "./EmployeesTitle";
import { PROJECTS_TITLE_FIELD } from "../projects/ProjectsTitle";
import { ROLES_TITLE_FIELD } from "../roles/RolesTitle";
import { TASKS_TITLE_FIELD } from "../tasks/TasksTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EmployeesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="EmployeeProjects"
          target="employeeId"
          label="EmployeeProjectsItems"
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
            <ReferenceField
              label="Project"
              source="projects.id"
              reference="Projects"
            >
              <TextField source={PROJECTS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeRoles"
          target="employeeId"
          label="EmployeeRolesItems"
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
            <ReferenceField label="Role" source="roles.id" reference="Roles">
              <TextField source={ROLES_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeTasks"
          target="employeeId"
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

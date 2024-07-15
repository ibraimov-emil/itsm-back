import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEES_TITLE_FIELD } from "../employees/EmployeesTitle";
import { PROJECTS_TITLE_FIELD } from "../projects/ProjectsTitle";

export const EmployeeProjectsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmployeeProjectsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

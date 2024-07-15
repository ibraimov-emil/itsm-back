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
import { TASKS_TITLE_FIELD } from "../tasks/TasksTitle";

export const EmployeeTasksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmployeeTasksItems"}
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
        <ReferenceField label="Task" source="tasks.id" reference="Tasks">
          <TextField source={TASKS_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

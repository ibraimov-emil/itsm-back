import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EMPLOYEES_TITLE_FIELD } from "../employees/EmployeesTitle";
import { ROLES_TITLE_FIELD } from "./RolesTitle";

export const RolesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EmployeeRoles"
          target="roleId"
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
      </SimpleShowLayout>
    </Show>
  );
};

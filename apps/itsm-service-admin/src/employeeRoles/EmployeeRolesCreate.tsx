import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeesTitle } from "../employees/EmployeesTitle";
import { RolesTitle } from "../roles/RolesTitle";

export const EmployeeRolesCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput source="role.id" reference="Roles" label="Role">
          <SelectInput optionText={RolesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

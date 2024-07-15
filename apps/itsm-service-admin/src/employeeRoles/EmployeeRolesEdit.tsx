import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeesTitle } from "../employees/EmployeesTitle";
import { RolesTitle } from "../roles/RolesTitle";

export const EmployeeRolesEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceInput source="role.id" reference="Roles" label="Role">
          <SelectInput optionText={RolesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { EmployeeRolesTitle } from "../employeeRoles/EmployeeRolesTitle";

export const RolesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="employeeRolesItems"
          reference="EmployeeRoles"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeRolesTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

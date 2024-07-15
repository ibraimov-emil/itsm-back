import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { EmployeeRolesTitle } from "../employeeRoles/EmployeeRolesTitle";

export const RolesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EmployeeProjectsTitle } from "../employeeProjects/EmployeeProjectsTitle";
import { EmployeeRolesTitle } from "../employeeRoles/EmployeeRolesTitle";
import { EmployeeTasksTitle } from "../employeeTasks/EmployeeTasksTitle";

export const EmployeesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="employeeProjectsItems"
          reference="EmployeeProjects"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeProjectsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeRolesItems"
          reference="EmployeeRoles"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeRolesTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeTasksItems"
          reference="EmployeeTasks"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTasksTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeesTitle } from "../employees/EmployeesTitle";
import { ProjectsTitle } from "../projects/ProjectsTitle";

export const EmployeeProjectsCreate = (
  props: CreateProps
): React.ReactElement => {
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
        <ReferenceInput
          source="project.id"
          reference="Projects"
          label="Project"
        >
          <SelectInput optionText={ProjectsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeesTitle } from "../employees/EmployeesTitle";
import { ProjectsTitle } from "../projects/ProjectsTitle";

export const EmployeeProjectsEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceInput
          source="project.id"
          reference="Projects"
          label="Project"
        >
          <SelectInput optionText={ProjectsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

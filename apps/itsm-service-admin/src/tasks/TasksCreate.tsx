import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTasksTitle } from "../employeeTasks/EmployeeTasksTitle";
import { ServicesTitle } from "../services/ServicesTitle";
import { DevelopmentStagesTitle } from "../developmentStages/DevelopmentStagesTitle";

export const TasksCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="employeeTasksItems"
          reference="EmployeeTasks"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTasksTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="service.id"
          reference="Services"
          label="Service"
        >
          <SelectInput optionText={ServicesTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="developmentStage.id"
          reference="DevelopmentStages"
          label="DevelopmentStage"
        >
          <SelectInput optionText={DevelopmentStagesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

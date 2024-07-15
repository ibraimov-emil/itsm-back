import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ProjectsTitle } from "../projects/ProjectsTitle";

export const RequestsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="projectsItems"
          reference="Projects"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

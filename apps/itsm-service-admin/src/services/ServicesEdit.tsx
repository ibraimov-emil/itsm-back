import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ProjectsTitle } from "../projects/ProjectsTitle";
import { TasksTitle } from "../tasks/TasksTitle";

export const ServicesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="projectsItems"
          reference="Projects"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tasksItems"
          reference="Tasks"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TasksTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { TasksTitle } from "../tasks/TasksTitle";

export const DevelopmentStagesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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

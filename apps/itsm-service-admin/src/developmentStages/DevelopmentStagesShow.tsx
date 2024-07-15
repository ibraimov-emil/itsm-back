import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";
import { DEVELOPMENTSTAGES_TITLE_FIELD } from "./DevelopmentStagesTitle";

export const DevelopmentStagesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Tasks"
          target="developmentStageId"
          label="TasksItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Service"
              source="services.id"
              reference="Services"
            >
              <TextField source={SERVICES_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="DevelopmentStage"
              source="developmentstages.id"
              reference="DevelopmentStages"
            >
              <TextField source={DEVELOPMENTSTAGES_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

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

import { SERVICES_TITLE_FIELD } from "./ServicesTitle";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";
import { STATUSES_TITLE_FIELD } from "../statuses/StatusesTitle";
import { REQUESTS_TITLE_FIELD } from "../requests/RequestsTitle";
import { DEVELOPMENTSTAGES_TITLE_FIELD } from "../developmentStages/DevelopmentStagesTitle";

export const ServicesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Projects"
          target="serviceId"
          label="ProjectsItems"
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
              label="Client"
              source="clients.id"
              reference="Clients"
            >
              <TextField source={CLIENTS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Status"
              source="statuses.id"
              reference="Statuses"
            >
              <TextField source={STATUSES_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Request"
              source="requests.id"
              reference="Requests"
            >
              <TextField source={REQUESTS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Tasks"
          target="serviceId"
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

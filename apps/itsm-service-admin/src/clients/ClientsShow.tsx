import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";
import { CLIENTS_TITLE_FIELD } from "./ClientsTitle";
import { STATUSES_TITLE_FIELD } from "../statuses/StatusesTitle";
import { REQUESTS_TITLE_FIELD } from "../requests/RequestsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ClientsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Projects"
          target="clientId"
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
      </SimpleShowLayout>
    </Show>
  );
};

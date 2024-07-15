import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";
import { STATUSES_TITLE_FIELD } from "../statuses/StatusesTitle";
import { REQUESTS_TITLE_FIELD } from "../requests/RequestsTitle";

export const ProjectsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProjectsItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Client" source="clients.id" reference="Clients">
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
    </List>
  );
};

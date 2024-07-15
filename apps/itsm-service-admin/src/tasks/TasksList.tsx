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
import { DEVELOPMENTSTAGES_TITLE_FIELD } from "../developmentStages/DevelopmentStagesTitle";

export const TasksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TasksItems"}
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
        <ReferenceField
          label="DevelopmentStage"
          source="developmentstages.id"
          reference="DevelopmentStages"
        >
          <TextField source={DEVELOPMENTSTAGES_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

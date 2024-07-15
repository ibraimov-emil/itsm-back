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

import { EmployeeProjectsTitle } from "../employeeProjects/EmployeeProjectsTitle";
import { ServicesTitle } from "../services/ServicesTitle";
import { ClientsTitle } from "../clients/ClientsTitle";
import { StatusesTitle } from "../statuses/StatusesTitle";
import { RequestsTitle } from "../requests/RequestsTitle";

export const ProjectsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="employeeProjectsItems"
          reference="EmployeeProjects"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeProjectsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="service.id"
          reference="Services"
          label="Service"
        >
          <SelectInput optionText={ServicesTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Clients" label="Client">
          <SelectInput optionText={ClientsTitle} />
        </ReferenceInput>
        <ReferenceInput source="status.id" reference="Statuses" label="Status">
          <SelectInput optionText={StatusesTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="request.id"
          reference="Requests"
          label="Request"
        >
          <SelectInput optionText={RequestsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

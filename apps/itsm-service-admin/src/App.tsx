import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClientsList } from "./clients/ClientsList";
import { ClientsCreate } from "./clients/ClientsCreate";
import { ClientsEdit } from "./clients/ClientsEdit";
import { ClientsShow } from "./clients/ClientsShow";
import { ServicesList } from "./services/ServicesList";
import { ServicesCreate } from "./services/ServicesCreate";
import { ServicesEdit } from "./services/ServicesEdit";
import { ServicesShow } from "./services/ServicesShow";
import { EmployeesList } from "./employees/EmployeesList";
import { EmployeesCreate } from "./employees/EmployeesCreate";
import { EmployeesEdit } from "./employees/EmployeesEdit";
import { EmployeesShow } from "./employees/EmployeesShow";
import { DevelopmentStagesList } from "./developmentStages/DevelopmentStagesList";
import { DevelopmentStagesCreate } from "./developmentStages/DevelopmentStagesCreate";
import { DevelopmentStagesEdit } from "./developmentStages/DevelopmentStagesEdit";
import { DevelopmentStagesShow } from "./developmentStages/DevelopmentStagesShow";
import { StatusesList } from "./statuses/StatusesList";
import { StatusesCreate } from "./statuses/StatusesCreate";
import { StatusesEdit } from "./statuses/StatusesEdit";
import { StatusesShow } from "./statuses/StatusesShow";
import { EmployeeRolesList } from "./employeeRoles/EmployeeRolesList";
import { EmployeeRolesCreate } from "./employeeRoles/EmployeeRolesCreate";
import { EmployeeRolesEdit } from "./employeeRoles/EmployeeRolesEdit";
import { EmployeeRolesShow } from "./employeeRoles/EmployeeRolesShow";
import { MessagesList } from "./messages/MessagesList";
import { MessagesCreate } from "./messages/MessagesCreate";
import { MessagesEdit } from "./messages/MessagesEdit";
import { MessagesShow } from "./messages/MessagesShow";
import { ChatsList } from "./chats/ChatsList";
import { ChatsCreate } from "./chats/ChatsCreate";
import { ChatsEdit } from "./chats/ChatsEdit";
import { ChatsShow } from "./chats/ChatsShow";
import { TasksList } from "./tasks/TasksList";
import { TasksCreate } from "./tasks/TasksCreate";
import { TasksEdit } from "./tasks/TasksEdit";
import { TasksShow } from "./tasks/TasksShow";
import { RolesList } from "./roles/RolesList";
import { RolesCreate } from "./roles/RolesCreate";
import { RolesEdit } from "./roles/RolesEdit";
import { RolesShow } from "./roles/RolesShow";
import { EmployeeProjectsList } from "./employeeProjects/EmployeeProjectsList";
import { EmployeeProjectsCreate } from "./employeeProjects/EmployeeProjectsCreate";
import { EmployeeProjectsEdit } from "./employeeProjects/EmployeeProjectsEdit";
import { EmployeeProjectsShow } from "./employeeProjects/EmployeeProjectsShow";
import { EmployeeTasksList } from "./employeeTasks/EmployeeTasksList";
import { EmployeeTasksCreate } from "./employeeTasks/EmployeeTasksCreate";
import { EmployeeTasksEdit } from "./employeeTasks/EmployeeTasksEdit";
import { EmployeeTasksShow } from "./employeeTasks/EmployeeTasksShow";
import { RequestsList } from "./requests/RequestsList";
import { RequestsCreate } from "./requests/RequestsCreate";
import { RequestsEdit } from "./requests/RequestsEdit";
import { RequestsShow } from "./requests/RequestsShow";
import { IncidentsList } from "./incidents/IncidentsList";
import { IncidentsCreate } from "./incidents/IncidentsCreate";
import { IncidentsEdit } from "./incidents/IncidentsEdit";
import { IncidentsShow } from "./incidents/IncidentsShow";
import { ChatParticipantsList } from "./chatParticipants/ChatParticipantsList";
import { ChatParticipantsCreate } from "./chatParticipants/ChatParticipantsCreate";
import { ChatParticipantsEdit } from "./chatParticipants/ChatParticipantsEdit";
import { ChatParticipantsShow } from "./chatParticipants/ChatParticipantsShow";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ITSM Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Clients"
          list={ClientsList}
          edit={ClientsEdit}
          create={ClientsCreate}
          show={ClientsShow}
        />
        <Resource
          name="Services"
          list={ServicesList}
          edit={ServicesEdit}
          create={ServicesCreate}
          show={ServicesShow}
        />
        <Resource
          name="Employees"
          list={EmployeesList}
          edit={EmployeesEdit}
          create={EmployeesCreate}
          show={EmployeesShow}
        />
        <Resource
          name="DevelopmentStages"
          list={DevelopmentStagesList}
          edit={DevelopmentStagesEdit}
          create={DevelopmentStagesCreate}
          show={DevelopmentStagesShow}
        />
        <Resource
          name="Statuses"
          list={StatusesList}
          edit={StatusesEdit}
          create={StatusesCreate}
          show={StatusesShow}
        />
        <Resource
          name="EmployeeRoles"
          list={EmployeeRolesList}
          edit={EmployeeRolesEdit}
          create={EmployeeRolesCreate}
          show={EmployeeRolesShow}
        />
        <Resource
          name="Messages"
          list={MessagesList}
          edit={MessagesEdit}
          create={MessagesCreate}
          show={MessagesShow}
        />
        <Resource
          name="Chats"
          list={ChatsList}
          edit={ChatsEdit}
          create={ChatsCreate}
          show={ChatsShow}
        />
        <Resource
          name="Tasks"
          list={TasksList}
          edit={TasksEdit}
          create={TasksCreate}
          show={TasksShow}
        />
        <Resource
          name="Roles"
          list={RolesList}
          edit={RolesEdit}
          create={RolesCreate}
          show={RolesShow}
        />
        <Resource
          name="EmployeeProjects"
          list={EmployeeProjectsList}
          edit={EmployeeProjectsEdit}
          create={EmployeeProjectsCreate}
          show={EmployeeProjectsShow}
        />
        <Resource
          name="EmployeeTasks"
          list={EmployeeTasksList}
          edit={EmployeeTasksEdit}
          create={EmployeeTasksCreate}
          show={EmployeeTasksShow}
        />
        <Resource
          name="Requests"
          list={RequestsList}
          edit={RequestsEdit}
          create={RequestsCreate}
          show={RequestsShow}
        />
        <Resource
          name="Incidents"
          list={IncidentsList}
          edit={IncidentsEdit}
          create={IncidentsCreate}
          show={IncidentsShow}
        />
        <Resource
          name="ChatParticipants"
          list={ChatParticipantsList}
          edit={ChatParticipantsEdit}
          create={ChatParticipantsCreate}
          show={ChatParticipantsShow}
        />
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

import { Module } from "@nestjs/common";
import { ClientsModule } from "./clients/clients.module";
import { ServicesModule } from "./services/services.module";
import { EmployeesModule } from "./employees/employees.module";
import { DevelopmentStagesModule } from "./developmentStages/developmentStages.module";
import { StatusesModule } from "./statuses/statuses.module";
import { EmployeeRolesModule } from "./employeeRoles/employeeRoles.module";
import { MessagesModule } from "./messages/messages.module";
import { ChatsModule } from "./chats/chats.module";
import { TasksModule } from "./tasks/tasks.module";
import { RolesModule } from "./roles/roles.module";
import { EmployeeProjectsModule } from "./employeeProjects/employeeProjects.module";
import { EmployeeTasksModule } from "./employeeTasks/employeeTasks.module";
import { RequestsModule } from "./requests/requests.module";
import { IncidentsModule } from "./incidents/incidents.module";
import { ChatParticipantsModule } from "./chatParticipants/chatParticipants.module";
import { ProjectsModule } from "./projects/projects.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ClientsModule,
    ServicesModule,
    EmployeesModule,
    DevelopmentStagesModule,
    StatusesModule,
    EmployeeRolesModule,
    MessagesModule,
    ChatsModule,
    TasksModule,
    RolesModule,
    EmployeeProjectsModule,
    EmployeeTasksModule,
    RequestsModule,
    IncidentsModule,
    ChatParticipantsModule,
    ProjectsModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectsCreateNestedManyWithoutClientsItemsInput } from "./ProjectsCreateNestedManyWithoutClientsItemsInput";

export type ClientsCreateInput = {
  user?: UserWhereUniqueInput | null;
  projectsItems?: ProjectsCreateNestedManyWithoutClientsItemsInput;
};

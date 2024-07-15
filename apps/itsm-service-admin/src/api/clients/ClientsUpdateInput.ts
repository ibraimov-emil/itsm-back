import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectsUpdateManyWithoutClientsItemsInput } from "./ProjectsUpdateManyWithoutClientsItemsInput";

export type ClientsUpdateInput = {
  user?: UserWhereUniqueInput | null;
  projectsItems?: ProjectsUpdateManyWithoutClientsItemsInput;
};

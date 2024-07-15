import { ChatsWhereInput } from "./ChatsWhereInput";
import { ChatsOrderByInput } from "./ChatsOrderByInput";

export type ChatsFindManyArgs = {
  where?: ChatsWhereInput;
  orderBy?: Array<ChatsOrderByInput>;
  skip?: number;
  take?: number;
};

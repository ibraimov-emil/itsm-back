import { ChatParticipantsWhereInput } from "./ChatParticipantsWhereInput";
import { ChatParticipantsOrderByInput } from "./ChatParticipantsOrderByInput";

export type ChatParticipantsFindManyArgs = {
  where?: ChatParticipantsWhereInput;
  orderBy?: Array<ChatParticipantsOrderByInput>;
  skip?: number;
  take?: number;
};

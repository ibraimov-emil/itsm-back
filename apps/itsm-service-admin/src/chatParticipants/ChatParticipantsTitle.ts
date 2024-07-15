import { ChatParticipants as TChatParticipants } from "../api/chatParticipants/ChatParticipants";

export const CHATPARTICIPANTS_TITLE_FIELD = "id";

export const ChatParticipantsTitle = (record: TChatParticipants): string => {
  return record.id?.toString() || String(record.id);
};

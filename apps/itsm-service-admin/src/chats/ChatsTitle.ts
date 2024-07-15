import { Chats as TChats } from "../api/chats/Chats";

export const CHATS_TITLE_FIELD = "id";

export const ChatsTitle = (record: TChats): string => {
  return record.id?.toString() || String(record.id);
};

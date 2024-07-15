import { Requests as TRequests } from "../api/requests/Requests";

export const REQUESTS_TITLE_FIELD = "id";

export const RequestsTitle = (record: TRequests): string => {
  return record.id?.toString() || String(record.id);
};

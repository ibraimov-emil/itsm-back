import { Statuses as TStatuses } from "../api/statuses/Statuses";

export const STATUSES_TITLE_FIELD = "id";

export const StatusesTitle = (record: TStatuses): string => {
  return record.id?.toString() || String(record.id);
};

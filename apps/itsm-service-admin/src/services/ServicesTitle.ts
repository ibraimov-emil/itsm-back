import { Services as TServices } from "../api/services/Services";

export const SERVICES_TITLE_FIELD = "id";

export const ServicesTitle = (record: TServices): string => {
  return record.id?.toString() || String(record.id);
};

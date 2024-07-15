import { Incidents as TIncidents } from "../api/incidents/Incidents";

export const INCIDENTS_TITLE_FIELD = "id";

export const IncidentsTitle = (record: TIncidents): string => {
  return record.id?.toString() || String(record.id);
};

import { DevelopmentStages as TDevelopmentStages } from "../api/developmentStages/DevelopmentStages";

export const DEVELOPMENTSTAGES_TITLE_FIELD = "id";

export const DevelopmentStagesTitle = (record: TDevelopmentStages): string => {
  return record.id?.toString() || String(record.id);
};

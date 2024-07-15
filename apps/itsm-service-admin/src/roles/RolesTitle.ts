import { Roles as TRoles } from "../api/roles/Roles";

export const ROLES_TITLE_FIELD = "id";

export const RolesTitle = (record: TRoles): string => {
  return record.id?.toString() || String(record.id);
};

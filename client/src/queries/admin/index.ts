import makeRequest from "../makeRequest";

export const getTenantTemplates = ({
  token,
  tenant_id,
}: {
  token: string;
  tenant_id: string;
}): Promise<any> =>
  makeRequest({
    method: "GET",
    url: `admin/tenant/${tenant_id}/templates/`,
    token,
  });

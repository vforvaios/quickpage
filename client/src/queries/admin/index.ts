import makeRequest from "../makeRequest";

export const getTenantInfo = (tenantId: number, token: string): Promise<any> =>
  makeRequest({
    method: "GET",
    url: `tenant/${tenantId}`,
    token,
  });

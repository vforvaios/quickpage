import makeRequest from "./makeRequest";

export const registerUserReq = (obj: any): Promise<any> => {
  return makeRequest({
    method: "POST",
    url: "register",
    body: JSON.stringify(obj),
  });
};

export const loginUserReq = (obj: any): Promise<any> => {
  return makeRequest({
    method: "POST",
    url: "login",
    body: JSON.stringify(obj),
  });
};

export const getTenant = (tenant: string): Promise<any> => {
  return makeRequest({
    method: "GET",
    url: `tenants/${tenant}`,
  });
};

export const getHeroDetails = ({
  tenantId,
  sectionId,
}: {
  tenantId: number;
  sectionId: number;
}): Promise<any> => {
  return makeRequest({
    method: "GET",
    url: `tenants/${tenantId}/section/${sectionId}/details`,
  });
};

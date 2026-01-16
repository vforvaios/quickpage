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

export const getTenantServices = (tenant: string): Promise<any> => {
  return makeRequest({
    method: "GET",
    url: `tenants/${tenant}/services`,
  });
};

export const getTenantAvailability = (
  tenant: string,
  date: string,
  serviceId: number
): Promise<any> => {
  return makeRequest({
    method: "GET",
    url: `tenants/${tenant}/availability?date=${date}&serviceId=${serviceId}`,
  });
};

export const addCustomerAppointment = (
  tenant: string,
  date: string,
  serviceId: number,
  selectedSlot: any
): Promise<any> => {
  return makeRequest({
    method: "POST",
    url: `tenants/${tenant}/appointments`,
    body: JSON.stringify({
      tenant,
      serviceId,
      date,
      startTime: selectedSlot,
    }),
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

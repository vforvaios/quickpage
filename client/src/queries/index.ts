import makeRequest from "./makeRequest";

export const registerUserReq = (obj: any): Promise<any> => {
  return makeRequest({
    method: "POST",
    url: "register",
    body: JSON.stringify(obj),
  });
};

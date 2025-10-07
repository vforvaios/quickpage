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

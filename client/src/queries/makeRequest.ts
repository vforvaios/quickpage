type MakeRequestType = {
  method: string;
  url: string;
  token?: string | null;
  body?: any;
};

const configureHeaders = (token: string) => {
  if (token) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

const makeRequest = ({
  method,
  url,
  token = null,
  body = null,
}: MakeRequestType) =>
  fetch(`${import.meta.env.VITE_API_URL}/api/${url}`, {
    method,
    headers: configureHeaders(token as any),
    ...(body && { body }),
  }).then(async (response) => {
    if (!response.ok) {
      return response.json().then((response) => {
        throw response?.error || response?.error?.name || response?.message;
      });
    }

    if (response.status === 204) {
      return null;
    }

    const data = await response.json();

    if (data?.error) {
      throw (
        data.error ||
        data.error.name ||
        data.error.message ||
        "Unknown logical error"
      );
    }
    return data;
  });

export default makeRequest;

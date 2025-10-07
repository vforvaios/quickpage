type MakeRequestType = {
  method: string;
  url: string;
  body?: any;
};

const configureHeaders = (resFormat: string, isFormData?: boolean) => {
  if (resFormat === "json") {
    if (!isFormData) {
      return {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    } else {
      return { Accept: "application/json" };
    }
  } else if (resFormat === "blob") {
    return {
      "Content-Type": "application/json",
      Accept: "text/csv",
    };
  } else {
    return {
      Accept: "application/pdf",
    };
  }
};

const makeRequest = ({ method, url, body = null }: MakeRequestType) => {
  const isFormData = body instanceof FormData;

  return fetch(`${import.meta.env.VITE_API_URL}/api/${url}`, {
    method,
    headers: configureHeaders("json", isFormData),
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
};

export default makeRequest;

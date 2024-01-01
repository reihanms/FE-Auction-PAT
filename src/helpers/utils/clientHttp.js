import { isNil } from "lodash-es";
const clientHttp = {
  get: async (endpoint, params = {}, headers = {}) => {
    let url = new URL(`${process.env.REACT_APP_BASE_API_URL}${endpoint}`);
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      credentials: 'include'
    };
    const response = await fetch(url, options);
    if (response.status < 400 && response.status >= 200) {
      return response.json().then((data) => {
        return { ...data, code: response.status };
      });
    }
    return response.json().then((data) => {
      return { ...data, code: response.status };
    });
  },
  post: async (endpoint, body = {}, headers = {}, customHeaders = null) => {
    let url = `${process.env.REACT_APP_BASE_API_URL}${endpoint}`;
    const options = {
      method: "POST",
      headers: !isNil(customHeaders)
        ? customHeaders
        : {
            "Content-Type": "application/json",
            ...headers,
          },
      body:
        typeof window !== "undefined" && body instanceof FormData
          ? body
          : JSON.stringify(body),
          
      credentials: 'include'
    };
    const response = await fetch(url, options);
    if (response.status < 400 && response.status >= 200) {
      return response.json().then((data) => {
        return { ...data, code: response.status };
      });
    }
    const responseJson = await response.json();
    return {
      code: response.status,
      url: response.url,
      message: responseJson.message,
      data: {},
    };
  },

  put: async (endpoint, body = {}, headers = {}, customHeaders = null) => {
    let url = new URL(`${process.env.REACT_APP_BASE_API_URL}${endpoint}`);
    const options = {
      method: "PUT",
      headers: !isNil(customHeaders)
        ? customHeaders
        : {
            "Content-Type": "application/json",
            ...headers,
          },
      body:
        typeof window !== "undefined" && body instanceof FormData
          ? body
          : JSON.stringify(body),
          
      credentials: 'include'
    };
    const response = await fetch(url, options);
    if (response.status < 400 && response.status >= 200) {
      return response.json().then((data) => {
        return { ...data, code: response.status };
      });
    }
    const responseJson = await response.json();
    return {
      code: response.status,
      url: response.url,
      message: responseJson.message,
      data: {},
    };
  },

  del: async (endpoint, params = {}, headers = {}) => {
    let url = new URL(`${process.env.REACT_APP_BASE_API_URL}${endpoint}`);
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      credentials: 'include'
    };
    const response = await fetch(url, options);
    if (response.status < 400 && response.status >= 200) {
      return response.json().then((data) => {
        return { ...data, code: response.status };
      });
    }
    return {
      code: response.status,
      status: response.statusText,
      url: response.url,
      result: {},
    };
  },
};
export { clientHttp };

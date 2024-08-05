import axios, { AxiosResponse, AxiosError } from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const httpService = () => {
  const token = localStorage.getItem("token");
  let headers: any = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods":
      "GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH",
    "Access-Control-Allow-Headers":
      "Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, Origin",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: BaseUrl,
    headers,
  });
};

export const get = async <T,>(url: string, config?: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await httpService().get(url, config);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const post = async <T,>(
  url: string,
  body: any,
  config?: any
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await httpService().post(
      url,
      body,
      config
    );
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const put = async <T,>(
  url: string,
  body: any,
  config?: any
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await httpService().put(url, body);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const patch = async <T,>(url: string, body: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await httpService().patch(url, body);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const del = async <T,>(url: string, body: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await httpService().delete(url, body);
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const setHttpParams = (params: {
  count: number;
  start: number;
  attribute: string;
  order_by: string;
  search: string;
  field: string;
}): string => {
  let url = "";
  if (params) {
    const limit = params.count !== 0 ? `&limit=${params.count}` : "";
    url = `?page=${params.start}${limit}${
      params.attribute &&
      "&order_by=" + params.attribute + ":" + params.order_by
    }${params.search && "&search=" + params.field + ":like:" + params.search}`;
  }
  return url;
};

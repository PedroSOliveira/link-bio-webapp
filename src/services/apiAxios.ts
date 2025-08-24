import axios, { AxiosInstance } from "axios";
import { IHttpClient } from "./ApiInterface";

export class AxiosHttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: "https://link-bio-api-ec02a3bea4fe.herokuapp.com/v1" });
  }

  //http://localhost:8080/v1"
  // https://link-bio-api-ec02a3bea4fe.herokuapp.com/v1/pages

  async get(url: string, params?: Record<string, unknown>) {
    const response = await this.axiosInstance.get(url, { params });
    return response.data;
  }

  async post<T>(url: string, data: T) {
    const response = await this.axiosInstance.post(url, data);
    return response.data;
  }

  async delete(url: string) {
    const response = await this.axiosInstance.delete(url);
    return response.data;
  }

  async put(url: string) {
    const response = await this.axiosInstance.put(url);
    return response.data;
  }

  async patch(url: string) {
    const response = await this.axiosInstance.patch(url);
    return response.data;
  }
}

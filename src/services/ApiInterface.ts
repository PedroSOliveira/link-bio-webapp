export interface IHttpClient {
  get<T>(url: string, params?: Record<string, unknown>): Promise<T>;
  post<T>(url: string, data: T): Promise<T>;
  delete(url: string): Promise<void>;
  put(url: string): Promise<void>;
  patch(url: string): Promise<void>;
}

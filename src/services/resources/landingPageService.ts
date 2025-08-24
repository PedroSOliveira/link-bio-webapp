import { LandingPageModel } from "@/models/landing-page/LandingPageData";
import { IHttpClient } from "../ApiInterface";

export class LandingPageService {
  constructor(private httpClient: IHttpClient) {}

  private baseURL = "/pages";

  public getAll = async (
    params: any | undefined
  ): Promise<LandingPageModel[]> => {
    return this.httpClient.get<LandingPageModel[]>(
      this.baseURL,
      (params as Record<string, unknown>) || {}
    );
  };

  public getByCode = async (code: string): Promise<LandingPageModel> => {
    const url = `${this.baseURL}/${code}`;
    return this.httpClient.get<LandingPageModel>(url);
  };
}

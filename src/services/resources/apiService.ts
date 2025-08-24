import { AxiosHttpClient } from "../apiAxios";
import { LandingPageService } from "./landingPageService";

const apiServiceFactory = () => {
  const axiosHttpClient = new AxiosHttpClient();
  return {
    landingPage: new LandingPageService(axiosHttpClient),
  };
};

export const apiService = apiServiceFactory();

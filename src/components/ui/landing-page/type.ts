import { LandingPageModel } from "@/models/landing-page/LandingPageData";
import { ITheme } from "@/models/theme/IThemeData";

export interface ILandingPageProps {
  landingPage: LandingPageModel;
  theme: ITheme;
  isEditing?: boolean;
}

import { IHeaderData } from "../header/IHeaderData";
import { IContentData } from "../content/IContentData";
import { IButtonData } from "../button/IButtonData";
import { SectionType } from "./SectionTypeEnum";
import { ISocialMediaData } from "../social-media/ISocialMediaData";

export interface ISection {
  enabled: boolean;
  position: number;
  type: SectionType;
  header?: IHeaderData;
  content?: IContentData;
  button?: IButtonData;
  socialMedias: ISocialMediaData[];
}

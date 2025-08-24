import { HeaderData } from "../header/HeaderData";
import { ContentData } from "../content/ContentData";
import { ButtonData } from "../button/ButtonData";
import { ISection } from "./ISectionData";
import { SectionType } from "./SectionTypeEnum";
import { SocialMediaData } from "../social-media/SocialMediaData";

export class Section implements ISection {
  public enabled: boolean;
  public position: number;
  public type: SectionType;
  public header?: HeaderData;
  public content?: ContentData;
  public button?: ButtonData;
  public socialMedias: SocialMediaData[];

  constructor({
    enabled,
    position,
    type,
    header,
    content,
    button,
    socialMedias,
  }: {
    enabled: boolean;
    position: number;
    type: SectionType;
    header?: HeaderData;
    content?: ContentData;
    button?: ButtonData;
    socialMedias: SocialMediaData[];
  }) {
    this.enabled = enabled;
    this.position = position;
    this.type = type;
    this.header = header;
    this.content = content;
    this.button = button;
    this.socialMedias = socialMedias;
  }
}

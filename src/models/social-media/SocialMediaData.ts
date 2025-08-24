import { ISocialMediaData } from "./ISocialMediaData";

export class SocialMediaData implements ISocialMediaData {
  public text: string;
  public link: string;
  public enabled?: boolean;
  public icon: string;
  public position: number;

  constructor({
    text,
    link,
    enabled = true,
    icon,
    position,
  }: {
    text: string;
    link: string;
    enabled?: boolean;
    icon: string;
    position: number;
  }) {
    this.text = text;
    this.link = link;
    this.enabled = enabled;
    this.icon = icon;
    this.position = position;
  }
}

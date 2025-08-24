import { IHeaderData } from "./IHeaderData";

export class HeaderData implements IHeaderData {
  public title: string;
  public description: string;
  public image: string;
  public position: number;

  constructor({
    title,
    description,
    image,
    position,
  }: {
    title: string;
    description: string;
    image: string;
    position: number;
  }) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.position = position;
  }
}

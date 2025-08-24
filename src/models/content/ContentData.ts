import { ButtonData } from "../button/ButtonData";
import { IContentData } from "./IContentData";
import { VisualizationType } from "./VisualizationTypeEnu";

export class ContentData implements IContentData {
  public title: string;
  public description: string;
  public image: string;
  public visualization: VisualizationType;
  public button?: ButtonData;

  constructor({
    title,
    description,
    image,
    visualization,
    button,
  }: {
    title: string;
    description: string;
    image: string;
    visualization: VisualizationType;
    button?: ButtonData;
  }) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.visualization = visualization;
    this.button = button;
  }
}

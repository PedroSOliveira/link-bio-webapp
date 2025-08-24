
import { IButtonData } from "../button/IButtonData";
import { VisualizationType } from "./VisualizationTypeEnu";

export interface IContentData {
  title: string;
  description: string;
  image: string;
  visualization: VisualizationType;
  button?: IButtonData;
}

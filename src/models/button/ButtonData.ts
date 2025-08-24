import { ButtonType } from "./ButtonTypeEnum";
import { IButtonData } from "./IButtonData";

function _generateTimestampId(): string {
  return `${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

export class ButtonData implements IButtonData {
  public readonly codeFake?: string;
  public text: string;
  public link: string;
  public enabled?: boolean;
  public position: number;
  public type: ButtonType;

  constructor({
    text,
    link,
    position,
    type,
    enabled = true,
    codeFake,
  }: {
    text: string;
    link: string;
    position: number;
    type: ButtonType;
    enabled?: boolean;
    codeFake?: string;
  }) {
    this.codeFake = codeFake ?? _generateTimestampId();
    this.text = text;
    this.link = link;
    this.enabled = enabled;
    this.position = position;
    this.type = type;
  }
}

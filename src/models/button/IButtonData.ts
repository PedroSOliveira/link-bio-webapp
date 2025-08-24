import { ButtonType } from "./ButtonTypeEnum";

export interface IButtonData {
  readonly codeFake?: string;
  text: string;
  link: string;
  enabled?: boolean;
  position: number;
  type: ButtonType;
}

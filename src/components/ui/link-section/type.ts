// src/components/sections/LinkSection/types.ts

import { ButtonData } from "@/models/button/ButtonData";
import { ITheme } from "@/models/theme/IThemeData";

export interface ILinkSectionProps {
  theme: ITheme;
  buttonData: ButtonData;
  isEditing: boolean;
}

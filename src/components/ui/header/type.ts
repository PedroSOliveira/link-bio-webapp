// src/components/sections/HeaderSection/types.ts

import { HeaderData } from "@/models/header/HeaderData";
import { ITheme } from "@/models/theme/IThemeData";

export interface IHeaderSectionProps {
  theme: ITheme;
  headerData: HeaderData;
  isEditing: boolean;
}

import { ContentData } from "@/models/content/ContentData";
import { ITheme } from "@/models/theme/IThemeData";

export interface IContentSectionProps {
  theme: ITheme;
  contentData: ContentData;
  isEditing: boolean;
}

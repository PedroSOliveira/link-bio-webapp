// src/models/landing-page/ILandingPageModel.ts

import { ISection } from "../section/ISectionData";

export interface ILandingPageData {
  id: string;
  title: string;
  slug: string;
  sections: ISection[];
  visits: number;
  createdAt: Date;
  updatedAt: Date;
}

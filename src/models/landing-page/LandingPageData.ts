// src/models/landing-page/LandingPageModel.ts

import { Section } from "../section/SectionData";
import { ILandingPageData } from "./ILandingPageData";

export class LandingPageModel implements ILandingPageData {
  public id: string;
  public title: string;
  public slug: string;
  public sections: Section[];
  public visits: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor({
    id,
    title,
    slug,
    sections,
    visits = 0,
    createdAt,
    updatedAt,
  }: {
    id: string;
    title: string;
    slug: string;
    sections: Section[];
    visits?: number;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.title = title;
    this.slug = slug;
    this.sections = sections;
    this.visits = visits;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

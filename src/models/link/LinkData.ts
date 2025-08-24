// src/models/link/LinkData.ts

import { ILinkData } from "./ILinkData";

export class LinkData implements ILinkData {
  public text: string;
  public link: string;
  public position: number;
  public enabled: boolean;

  constructor({
    text,
    link,
    position,
    enabled = true,
  }: {
    text: string;
    link: string;
    position: number;
    enabled?: boolean;
  }) {
    this.text = text;
    this.link = link;
    this.position = position;
    this.enabled = enabled;
  }
  
  // O construtor fromJson e o método toJson foram omitidos, pois não estavam na sua classe original.
  // Caso precise deles, a lógica seria:

  /*
  public static fromJson(json: any): LinkData {
    if (!json.text || !json.link || json.position === undefined) {
      throw new Error("Invalid LinkData JSON.");
    }
    return new LinkData({
      text: json.text,
      link: json.link,
      position: json.position,
      enabled: json.enabled ?? true,
    });
  }

  public toJson(): ILinkData {
    return {
      text: this.text,
      link: this.link,
      position: this.position,
      enabled: this.enabled,
    };
  }

  public copyWith({
    text,
    link,
    position,
    enabled,
  }: {
    text?: string;
    link?: string;
    position?: number;
    enabled?: boolean;
  }): LinkData {
    return new LinkData({
      text: text ?? this.text,
      link: link ?? this.link,
      position: position ?? this.position,
      enabled: enabled ?? this.enabled,
    });
  }
  */
}
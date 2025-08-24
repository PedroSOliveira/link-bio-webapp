import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
  FaDiscord,
  FaTwitch,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { ISocialIconsViewProps } from "./types";
import { SocialMediaData } from "../../../models/social-media/SocialMediaData";
import { IconsContainer, IconWrapper } from "./styles";

const iconMap: { [key: string]: React.ElementType } = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  telegram: FaTelegramPlane,
  discord: FaDiscord,
  twitch: FaTwitch,
  twitter: FaXTwitter,
  tiktok: FaTiktok,
  github: FaGithub,
};

export const SocialIconsView: React.FC<ISocialIconsViewProps> = ({
  socialMedias,
  color,
}) => {
  return (
    <IconsContainer>
      {socialMedias.map((media: SocialMediaData, index) => {
        const iconKey = media.icon.toLowerCase();
        const IconComponent = iconMap[iconKey];

        if (!IconComponent) {
          console.warn(
            `Ícone não encontrado para a mídia social: ${media.text}`
          );
          return null;
        }

        return (
          <a
            key={index}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            title={media.text}
          >
            <IconWrapper $color={color}>
              <IconComponent />
            </IconWrapper>
          </a>
        );
      })}
    </IconsContainer>
  );
};

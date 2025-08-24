// src/components/sections/LinkSection/index.tsx

import React from "react";
import { ILinkSectionProps } from "./type";
import { ButtonType } from "@/models/button/ButtonTypeEnum";
import { LinkTile } from "../link-tile/styles";
import { ButtonCore } from "../button";
import { FiExternalLink } from "react-icons/fi";

export const LinkSection: React.FC<ILinkSectionProps> = ({
  theme,
  buttonData,
}) => {
  const { type, text, link } = buttonData;

  const renderContent = () => {
    if (type === ButtonType.BUTTON) {
      return (
        <ButtonCore
          text={text}
          link={link}
          backgroundColor={theme.buttonPrimaryColor}
          textColor={theme.whiteColor}
          borderColor={theme.whiteColor}
        />
      );
    } else if (type === ButtonType.LINK) {
      return (
        <LinkTile
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          $backgroundColor={theme.buttonPrimaryColor}
          $textColor={theme.whiteColor}
          $borderColor={theme.whiteColor}
        >
          {text}
          <FiExternalLink size={24}/>
        </LinkTile>
      );
    }
    return null;
  };

  return renderContent();
};

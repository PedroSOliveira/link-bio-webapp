// src/components/ui/StyledButton/index.tsx

import React from "react";
import { StyledButtonComponent } from "./styles";
import { IStyledButtonProps } from "./type";

export const ButtonCore: React.FC<IStyledButtonProps> = ({
  text,
  link,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <StyledButtonComponent
      //   onClick={handleClick}
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $borderColor={borderColor}
    >
      {text}
    </StyledButtonComponent>
  );
};

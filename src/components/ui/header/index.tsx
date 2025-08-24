import React from "react";
import { IHeaderSectionProps } from "./type";
import {
  Description,
  HeaderSectionContainer,
  ProfileImage,
  SectionContent,
  TextContainer,
  Title,
} from "./styles";

export const HeaderSection: React.FC<IHeaderSectionProps> = ({
  theme,
  headerData,
}) => {
    
  const sectionWidth = 360 * 0.9;
  const textWidth = 360 * 0.7;
  const { title, description } = headerData;
  const sectionContent = (
    <SectionContent>
      <ProfileImage $buttonPrimaryColor={theme.buttonPrimaryColor} />
      <TextContainer $width={textWidth}>
        <Title $color={theme.textPrimaryColor}>{title}</Title>
        <Description $color={theme.textPrimaryColor}>{description}</Description>
      </TextContainer>
    </SectionContent>
  );

  return <HeaderSectionContainer>{sectionContent}</HeaderSectionContainer>;
};

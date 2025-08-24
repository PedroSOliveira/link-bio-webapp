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
  const { title, description, image } = headerData;
  const sectionContent = (
    <SectionContent>
      {image && (
        <img
          src={`assets/${image}`}
          alt={title}
          width="150"
          height="150"
          style={{ borderRadius: "100px" }}
        />
      )}
      <TextContainer $width={textWidth}>
        <Title $color={theme.textPrimaryColor}>{title}</Title>
        <Description $color={theme.textPrimaryColor}>{description}</Description>
      </TextContainer>
    </SectionContent>
  );

  return <HeaderSectionContainer>{sectionContent}</HeaderSectionContainer>;
};

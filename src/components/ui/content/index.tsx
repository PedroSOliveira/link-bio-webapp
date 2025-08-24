import { VisualizationType } from "@/models/content/VisualizationTypeEnu";
import React from "react";
import { IContentSectionProps } from "./type";
import {
  ButtonContainer,
  CardContainer,
  ColumnLayout,
  Description,
  ImagePlaceholder,
  RowLayout,
  SectionContainer,
  TextContent,
  Title,
} from "./styles";
import { ButtonCore } from "../button";

export const ContentSection: React.FC<IContentSectionProps> = ({
  theme,
  contentData,
}) => {
  const { title, description, visualization, button } = contentData;

  const renderContent = () => {
    switch (visualization) {
      case VisualizationType.imageTopTextBelow:
        return (
          <CardContainer $backgroundColor={theme.backgroundColor}>
            <ColumnLayout>
              <ImagePlaceholder>📸</ImagePlaceholder>
              <TextContent>
                <Title $color={theme.textPrimaryColor}>{title}</Title>
                <Description $color={theme.textPrimaryColor}>
                  {description}
                </Description>
              </TextContent>
              {button?.enabled && (
                <ButtonContainer>
                  <ButtonCore
                    text={button.text}
                    link={button.link}
                    backgroundColor={theme.buttonPrimaryColor}
                    textColor={theme.whiteColor}
                    borderColor={theme.whiteColor}
                  />
                </ButtonContainer>
              )}
            </ColumnLayout>
          </CardContainer>
        );

      case VisualizationType.imageLeftTextRight:
        return (
          <CardContainer $backgroundColor={theme.backgroundColor}>
            <RowLayout>
              <ImagePlaceholder>📸</ImagePlaceholder>
              <TextContent>
                <Title $color={theme.textPrimaryColor}>{title}</Title>
                <Description $color={theme.textPrimaryColor}>
                  {description}
                </Description>
                {button && (
                  <ButtonContainer>
                    <ButtonCore
                      text={button.text}
                      link={button.link}
                      backgroundColor={theme.buttonPrimaryColor}
                      textColor={theme.whiteColor}
                      borderColor={theme.whiteColor}
                    />
                  </ButtonContainer>
                )}
              </TextContent>
            </RowLayout>
          </CardContainer>
        );

      case VisualizationType.imageRightTextLeft:
        return (
          <CardContainer $backgroundColor={theme.backgroundColor}>
            <RowLayout>
              <TextContent>
                <Title $color={theme.textPrimaryColor}>{title}</Title>
                <Description $color={theme.textPrimaryColor}>
                  {description}
                </Description>
                {button?.enabled && (
                  <ButtonContainer>
                    <ButtonCore
                      text={button.text}
                      link={button.link}
                      backgroundColor={theme.buttonPrimaryColor}
                      textColor={theme.whiteColor}
                      borderColor={theme.whiteColor}
                    />
                  </ButtonContainer>
                )}
              </TextContent>
              <ImagePlaceholder>📸</ImagePlaceholder>
            </RowLayout>
          </CardContainer>
        );

      case VisualizationType.textOnlyVertical:
        return (
          <CardContainer $backgroundColor={theme.backgroundColor}>
            <ColumnLayout>
              <Title $color={theme.textPrimaryColor}>{title}</Title>
              <Description $color={theme.textPrimaryColor}>
                {description}
              </Description>
              {button?.enabled && (
                <ButtonContainer>
                  <ButtonCore
                    text={button.text}
                    link={button.link}
                    backgroundColor={theme.buttonPrimaryColor}
                    textColor={theme.whiteColor}
                    borderColor={theme.whiteColor}
                  />
                </ButtonContainer>
              )}
            </ColumnLayout>
          </CardContainer>
        );

      default:
        return null;
    }
  };

  return <SectionContainer>{renderContent()}</SectionContainer>;
};

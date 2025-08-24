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
  const { title, description, visualization, button, image } = contentData;

  const renderContent = () => {
    switch (visualization) {
      case VisualizationType.IMAGE_TOP_TEXT_BELOW:
        return (
          <CardContainer $backgroundColor={theme.backgroundColor}>
            <ColumnLayout>
              {image && (
                <ImagePlaceholder>
                  <img
                    src={`assets/${image}`}
                    alt={title}
                    width="150"
                    height="150"
                    style={{ borderRadius: "10px" }}
                  />
                </ImagePlaceholder>
              )}
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

      case VisualizationType.IMAGE_LEFT_TEXT_RIGHT:
        return (
          <CardContainer $backgroundColor={theme.backgroundColor}>
            <RowLayout>
              {image && (
                <ImagePlaceholder>
                  <img
                    src={`assets/${image}`}
                    alt={title}
                    width="150"
                    height="150"
                    style={{ borderRadius: "10px" }}
                  />
                </ImagePlaceholder>
              )}
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

      case VisualizationType.IMAGE_RIGHT_TEXT_LEFT:
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
              {image && (
                <ImagePlaceholder>
                  <img
                    src={`assets/${image}`}
                    alt={title}
                    width="150"
                    height="150"
                    style={{ borderRadius: "10px" }}
                  />
                </ImagePlaceholder>
              )}
            </RowLayout>
          </CardContainer>
        );

      case VisualizationType.TEXT_ONLY_VERTICAL:
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

import React from "react";
import { MainContent, PageContainer } from "./styles";
import { ILandingPageProps } from "./type";
import { SectionType } from "@/models/section/SectionTypeEnum";
import { HeaderSection } from "../header";
import { ContentSection } from "../content";
import { SocialIconsView } from "../social-icons";
import { LinkSection } from "../link-section";

export const LandingPage: React.FC<ILandingPageProps> = ({
  landingPage,
  theme,
  isEditing = false,
}) => {
  return (
    <PageContainer
      $backgroundPrimaryColor={theme.backgroundColor}
      $backgroundSecondaryColor={theme.secondaryColor}
      $backgroundTerciaryColor={theme.primaryColor}
    >
      <MainContent>
        {landingPage.sections.map((section, index) => {
          // if (!section.enabled) {
          //   return null;
          // }

          switch (section.type) {
            case SectionType.HEADER:
              return (
                <HeaderSection
                  key={index}
                  theme={theme}
                  headerData={section.header!}
                  isEditing={isEditing}
                />
              );
            case SectionType.CONTENT:
              return (
                <ContentSection
                  key={index}
                  theme={theme}
                  contentData={section.content!}
                  isEditing={isEditing}
                />
              );
            case SectionType.BUTTON:
              return (
                <LinkSection
                  key={index}
                  theme={theme}
                  buttonData={section.button!}
                  isEditing={isEditing}
                />
              );
            case SectionType.LINK:
              if (section.socialMedias && section.socialMedias.length > 0) {
                return (
                  <SocialIconsView
                    key={index}
                    socialMedias={section.socialMedias}
                    color={theme.buttonPrimaryColor}
                  />
                );
              } else if (section.button?.link) {
                return (
                  <LinkSection
                    key={index}
                    theme={theme}
                    buttonData={section.button!}
                    isEditing={isEditing}
                  />
                );
              }
              return null;
            default:
              return null;
          }
        })}
      </MainContent>
    </PageContainer>
  );
};

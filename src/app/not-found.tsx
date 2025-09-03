"use client";

import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import {
  NotFoundContainer,
  NotFoundCard,
  IconWrapper,
  SadFace,
  Heading,
  Paragraph,
  StoreLinkText,
  StoreButtonsContainer,
  StoreButton,
} from "./styles";

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <NotFoundCard>
        <IconWrapper>
          <SadFace>:(</SadFace>
        </IconWrapper>
        <Heading>404</Heading>
        <Paragraph>
          A página que você está procurando não foi encontrada.
        </Paragraph>

        <StoreLinkText>Acesse nosso app por aqui:</StoreLinkText>
        <StoreButtonsContainer>
          <StoreButton
            href="https://play.google.com/store/apps/details?id=com.seven.linkbio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay />
            Google Play
          </StoreButton>
          <StoreButton
            href="https://apps.apple.com/us/app/link-na-bio/id6751461609"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple />
            App Store
          </StoreButton>
        </StoreButtonsContainer>
      </NotFoundCard>
    </NotFoundContainer>
  );
}

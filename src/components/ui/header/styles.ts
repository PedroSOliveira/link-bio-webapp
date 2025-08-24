"use client";

import styled from "styled-components";

export const HeaderSectionContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 12px;
  padding: 16px;
  background-color: transparent;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProfileImage = styled.div<{ $buttonPrimaryColor: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${(props) => props.$buttonPrimaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div<{ $width: number }>`
  width: ${(props) => props.$width}px;
  text-align: center;
  margin-top: 16px;
`;

export const Title = styled.h1<{ $color: string }>`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.$color};
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Description = styled.p<{ $color: string }>`
  font-size: 16px;
  color: ${(props) => props.$color};
  margin-top: 0;
  margin-bottom: 0;
`;

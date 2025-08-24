"use client";
import styled, { css } from "styled-components";

export const SectionContainer = styled.div<{}>`
  width: 90%;
  margin: 0 auto;
  padding: 16px;
  background-color: transparent;
  cursor: pointer;
`;

export const CardContainer = styled.div<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 16px;
`;

export const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const RowLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #e0e0e0; // Cor de placeholder
`;

export const TextContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex-grow: 1;
`;

export const Title = styled.h3<{ $color: string }>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.$color};
  margin-top: 0;
  margin-bottom: 8px;
`;

export const Description = styled.p<{ $color: string }>`
  font-size: 14px;
  color: ${(props) => props.$color};
  margin-top: 0;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 16px;
`;

export const ImagePlaceholder = styled.div`
  width: 50%;
  height: 100px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #999;
`;

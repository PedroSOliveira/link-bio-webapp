"use client";

import styled from "styled-components";

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.div<{ $color: string }>`
  padding: 8px;
  svg {
    fill: ${(props) => props.$color};
    font-size: 24px;
  }
`;

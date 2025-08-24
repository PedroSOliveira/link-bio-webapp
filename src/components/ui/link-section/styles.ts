"use client";

import styled, { css } from "styled-components";

export const SectionContainer = styled.div<{
  $whiteColor: string;
}>`
  width: 90%;
  margin: 0 auto;
  padding: 16px;
  border-radius: 12px;
  background-color: transparent;
  cursor: pointer;
`;

export const SectionContent = styled.div`
  padding: 0 10px;
`;

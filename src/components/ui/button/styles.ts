"use client";

import styled from "styled-components";

export const StyledButtonComponent = styled.button<{
  $backgroundColor: string;
  $textColor: string;
  $borderColor: string;
}>`
  width: 100%;
  min-height: 50px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  border: 1px solid ${(props) => props.$borderColor};
  border-radius: 30px;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

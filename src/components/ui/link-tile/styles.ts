"use client";

import styled from "styled-components";

export const LinkTile = styled.a<{
  $backgroundColor: string;
  $textColor: string;
  $borderColor: string;
}>`
  display: flex; /* Habilita o flexbox */
  align-items: center; /* Alinha o conteúdo verticalmente */
  justify-content: space-between; /* Espalha o conteúdo para as extremidades */

  width: 70%;
  padding: 16px;
  margin: 0 auto;
  text-decoration: none;
  border-radius: 8px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  font-weight: bold;
  transition: transform 0.2s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

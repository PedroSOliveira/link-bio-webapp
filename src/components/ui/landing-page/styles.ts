"use client";

import styled from "styled-components";

export const PageContainer = styled.div<{
  $backgroundPrimaryColor: string;
  $backgroundSecondaryColor: string;
  $backgroundTerciaryColor: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  min-height: 100vh;
  gap: 20px;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.$backgroundPrimaryColor},
    ${(props) => props.$backgroundSecondaryColor},
    ${(props) => props.$backgroundTerciaryColor}
  );

  overflow-y: auto; /* Garante que a barra de rolagem apareça quando necessário */

  /* Estilos para navegadores WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 5px; /* Largura mais fina */
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      #e6605f,
      #ff8a80
    ); /* Gradiente no tom desejado */
    border-radius: 10px; /* Mais arredondado */
  }

  /* Estilos para a track (opcional) */
  &::-webkit-scrollbar-track {
    background: transparent; /* Ou uma cor levemente transparente */
  }

  /* Estilos para Firefox */
  scrollbar-width: thin;
  scrollbar-color: #e6605f transparent; /* thumb track */
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 600px;
`;

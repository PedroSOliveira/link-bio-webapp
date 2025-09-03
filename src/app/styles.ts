"use client";

import styled from "styled-components";
import Link from "next/link";

export const primaryColor = "#F28F81";
export const accentColor = "#D97A6B";
export const lightColor = "#e6605f";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${lightColor};
  padding: 2rem;
  text-align: center;
`;

export const NotFoundCard = styled.div`
  background-color: #fdf1e9;
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${primaryColor};
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px ${accentColor};
`;

export const SadFace = styled.span`
  font-size: 3rem;
  color: ${lightColor};
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${accentColor};
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0 1.5rem;
`;

// Novo estilo para o texto antes dos botões
export const StoreLinkText = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${accentColor};
  margin: 0;
`;

export const StoreButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem; /* Adicionado um espaçamento superior */
`;

export const StoreButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  background-color: ${primaryColor};
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  border: 2px solid ${primaryColor};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${accentColor};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

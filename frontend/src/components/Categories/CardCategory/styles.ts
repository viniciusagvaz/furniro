import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme["gray-500"]};
  text-align: center; 
  text-transform: capitalize;

  transition: all 0.6s ease-in-out;
`;

export const HoverCardContent = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 0;
  width: 80%;
  height: 100%;

  transition: all 0.6s ease;
  z-index: 1;

  position: absolute;
`;

export const Image = styled.img`
  max-width: 381px;
  width: 100%;
  height: 100%;

  margin: 2rem auto 0;

  border-radius: 4px;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  max-width: 381px;
  width: 100%;
  height: 446px;
  margin-bottom: 4rem;

  position: relative;
  z-index: 0;

  transition: all 0.6s ease;

  &:hover {
    transform: scale(1.025);
    filter: drop-shadow(0px 0px 0.5rem #00000020);

    ${Title} {
      transform: scale(0.95);
    }

    ${HoverCardContent} {
      opacity: 1;
      width: 100%;
    }

    ${Image} {
      filter: opacity(0.5);
    }
  }
`;

export const CategoryLink = styled(Link)``;

import styled from "styled-components";

export const HoverCardContent = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  height: 100%;

  padding: 0 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;

  transition: all 1s ease;

  position: absolute;
`;

export const Actions = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img{
    width: 1rem;
    height: 1rem;
    margin: 0 .25rem;
  }
}
`;

export const ProductCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1rem;

  max-width: 285px;
  width: 100%;
  height: 446px;

  background-color: ${({ theme }) => theme["gray-200"]};

  position: relative;

  transition: all 0.6s ease;

  &:hover {
    transform: scale(1.05);

    ${HoverCardContent} {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

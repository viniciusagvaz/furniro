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

export const Image = styled.img`
  width: 100%;
  height: 301px;
  object-fit: cover;
`;

export const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  max-width: 285px;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const PriceContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.p`
  width: 100%;

  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const OldPrice = styled.p`
  width: 100%;

  text-decoration: line-through;
  font-size: 1rem;
  color: ${({ theme }) => theme["gray-400"]};

  opacity: 0.5;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme["gray-400"]};
`;

export const DiscountedPrice = styled.span`
  width: 250px;

  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const DiscountLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;

  color: white;

  background-color: ${({ theme }) => theme["discount-red"]};
  padding: 1rem;
  border-radius: 50%;

  position: absolute;
  top: 5%;
  right: 10%;
`;

export const NewLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;

  color: white;

  background-color: ${({ theme }) => theme["is-new-green"]};
  padding: 1rem;
  border-radius: 50%;

  position: absolute;
  top: 5%;
  right: 10%;
`;

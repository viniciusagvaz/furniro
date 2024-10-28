import styled from "styled-components";

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
  text-transform: capitalize;
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

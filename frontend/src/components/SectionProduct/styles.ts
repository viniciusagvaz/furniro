import styled from "styled-components";

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 3rem auto;
`;

export const ProductsContent = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: center;
`;

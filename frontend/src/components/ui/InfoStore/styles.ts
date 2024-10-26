import styled from "styled-components";

export const StorerInfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme["yellow-100"]};

  padding: 0 3rem;
  width: 100%;
  height: 270px;
`;

export const Card = styled.dl`
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  grid-template-rows: repeat(2, 0.5fr);
  grid-column-gap: .75rem;
  grid-row-gap: .75rem;

  dt {
    grid-area: 1 / 2 / 2 / 3;
    font-size: 1.55rem;
    font-weight: 700;
  }

  dd {
    grid-area: 2 / 2 / 3 / 3;
    font-weight: 400;
    font-size: 1.25rem;
    color: ${({ theme }) => theme["gray-400"]};
    }

  img {
    grid-area: 1 / 1 / 3 / 2;
    width: 60px;
    height: 60px;
  }
`;

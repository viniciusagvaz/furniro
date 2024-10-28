import styled from "styled-components";

export const FilterSorting = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  select {
    font-size: 1rem;
    padding: 1rem;
    border: none;
    color: ${({ theme }) => theme["gray-300"]};

    option {
      color: ${({ theme }) => theme["gray-300"]};
    }
  }
`;

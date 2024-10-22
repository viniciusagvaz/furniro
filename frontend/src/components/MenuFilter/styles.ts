import styled from "styled-components";

export const FilterMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span.pipe {
    height: 30px;
    border: 1px solid ${({ theme }) => theme["gray-300"]};
  }
`;

export const FilterModal = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  background-color: ${({ theme }) => theme["yellow-200"]};
  position: absolute;
  padding: 2.25rem;
  bottom: -150px;
  left: 0;
  border-radius: 10px;
  z-index: 1;
  
  &.active {
    visibility: visible;
  }
`;

export const FilterButton = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;
`;

export const FilterLabel = styled.label`
  font-size: 1.25rem;
`

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const ItemsShown = styled.div ``
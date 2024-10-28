import styled from "styled-components";

export const Rating = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  color: ${({ theme }) => theme["gray-300"]};
  font-size: 0.75rem;
  
  span.stars {
    display: flex;
    gap: 0.25rem;
  }
`;

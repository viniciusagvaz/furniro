import styled from "styled-components";

export const SizesLabel = styled.label`
  font-size: 0.875rem;
  line-height: 21px;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const Sizes = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

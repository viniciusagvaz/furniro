import styled from "styled-components";

export const ColorsLabel = styled.label`
  font-size: 0.875rem;
  line-height: 21px;
  color: ${({ theme }) => theme["gray-300"]};
`;

export const Colors = styled.form`
  display: flex;
  gap: 1.5rem;
`;

export const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000;

  background-color: ${({ color }) => color};
`;

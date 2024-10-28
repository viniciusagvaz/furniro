import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
`;

export const Input = styled.input`
  max-width: 200px;
  border: none;
  border-bottom: 1.5px solid #000;
  color: ${({ theme }) => theme["gray-500"]};
  font-size: 0.75rem;

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme["gray-300"]};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme["gray-300"]};
  }
`;

export const Label = styled.label`
  font-weight: 700;
  color: ${({ theme }) => theme["gray-500"]};
`;

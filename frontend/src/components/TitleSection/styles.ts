import styled from "styled-components";

interface TitleProps {
  fontSize: string;
}

export const Title = styled.h2<TitleProps>`
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  color: ${({ theme }) => theme["gray-500"]};
  text-align: center;
`;

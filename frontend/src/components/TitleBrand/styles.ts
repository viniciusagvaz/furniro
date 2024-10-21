import styled from "styled-components";

interface TitleProps {
  fontSize: string;
}

export const Title = styled.h2<TitleProps>`
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.fontSize};
`;

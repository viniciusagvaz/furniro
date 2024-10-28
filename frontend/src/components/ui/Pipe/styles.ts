import styled from "styled-components";

interface PipeProps {
  width?: string;
  height?: string;
  border?: string;
}

export const Pipe = styled.span<PipeProps>`
  display: block;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "1px"};
  border: ${(props) => props.border || `1px solid ${props.theme["gray-300"]}`};
`;

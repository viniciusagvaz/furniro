import * as S from "./styles";

interface PipeProps {
  width?: string;
  height?: string;
  border?: string;
}

export const Pipe = ({ width, height}: PipeProps) => {
  return <S.Pipe width={width} height={height} />;
};

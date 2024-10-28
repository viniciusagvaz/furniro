import * as S from "./styles";

interface IconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Icon({ src, alt, width, height }: IconProps) {
  return <S.Icon src={src} alt={alt} width={width} height={height} />;
}

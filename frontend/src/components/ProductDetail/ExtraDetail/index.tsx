import * as S from "./styles";

interface ExtraDetailProps {
  label: string;
  value: string;
}

export const ExtraDetail: React.FC<ExtraDetailProps> = ({ label, value }) => {
  return (
    <S.ExtraDetail>
      <S.Detail>{label}</S.Detail>
      <span>:</span>
      <S.DetailValue>{value}</S.DetailValue>
    </S.ExtraDetail>
  );
};

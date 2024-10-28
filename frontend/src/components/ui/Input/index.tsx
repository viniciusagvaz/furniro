import * as S from "./styles.js";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label?: string;
  placeholder: string;
}

export function Input({ type, name, label, placeholder }: InputProps) {
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input placeholder={placeholder} type={type} name={name} />
    </S.Wrapper>
  );
}
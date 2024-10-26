import * as S from "./styles.js";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to?: string;
  isActive?: boolean;
  variant: "details" | "show" | "navigation" | "cart" | "newsletter";
}

const buttonComponents = {
  details: S.DetailsButton,
  show: S.ShowButton,
  navigation: S.NavigationButton,
  cart: S.CartButton,
  newsletter: S.NewsLetterButton,
};

export function Button({ children, variant, ...props }: ButtonProps) {

  const ButtonComponent = buttonComponents[variant] || S.Button;


  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}

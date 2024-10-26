import * as S from "./styles.js";

interface MenuItemProps {
  children?: string;
  path: string;
  color?: string;
  icon?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  icon,
  path,
  color,
}) => {
  return (
    <S.MenuItem to={`${path}`} style={{ color }}>
      {icon && <S.Icon src={icon} alt="#" />}
      {children}
    </S.MenuItem>
  );
};

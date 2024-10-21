import * as S from "./styles.js";

interface IMenuItem {
  children?: string;
  icon?: React.ReactNode;
  path: string;
  color?: string;
}

export const MenuItem: React.FC<IMenuItem> = ({
  children,
  icon,
  path,
  color,
}) => {
  return (
    <S.MenuItem to={`${path}`} style={{ color }}>
      {icon && (
        <S.Icon style={{ width: "22.17px", height: "22.17px", color: "red" }}>
          {icon}
        </S.Icon>
      )}
      {children}
    </S.MenuItem>
  );
};

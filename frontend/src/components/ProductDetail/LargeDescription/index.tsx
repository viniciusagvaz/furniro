import * as S from "./styles";
import { Button } from "../../ui/Buttons";

interface LargeDescriptionProps {
  description: string | null;
  largeDescription: string | null;
  aditionalInformation?: string | null;
}

export const LargeDescription = ({
  description,
  largeDescription,
}: LargeDescriptionProps) => {
  return (
    <S.LargeDescription>
      <S.Buttons>
        <Button
          variant="newsletter"
          children="Description"
          style={{
            borderBottom: "none",
            fontSize: "1.5rem",
            fontWeight: "500",
          }}
        />
        <Button
          variant="newsletter"
          children="Aditional Information"
          style={{
            borderBottom: "none",
            fontSize: "1.5rem",
            fontWeight: "400",
            color: "#9f9f9f",
          }}
        />
      </S.Buttons>

      <S.Description>
        <p>{description}</p>
        <p>{largeDescription}</p>
      </S.Description>
    </S.LargeDescription>
  );
};

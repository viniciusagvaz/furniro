import { NewsLetterButton } from "../../ui/Buttons/styles";
import { Input } from "../../ui/Input";
import * as S from "./styles";

export function Newsletter() {
  return (
    <S.NewsletterContent>
      <S.NewsletterForm>
        <Input
          type="text"
          name="email"
          placeholder="Enter Your Email Address"
        />
        <NewsLetterButton children={"Subscribe"} />
      </S.NewsletterForm>
    </S.NewsletterContent>
  );
}

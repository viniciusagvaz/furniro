import * as S from "./styles";

import trophy from "../../../assets/icons/trophy.svg";
import warranty from "../../../assets/icons/warranty.svg";
import shipping from "../../../assets/icons/shipping.svg";
import support from "../../../assets/icons/support.svg";

export function StoreInfo() {
  const credentials = [
    {
      image: `${trophy}`,
      name: "High Quality",
      description: "crafted from top materials",
    },
    {
      image: `${warranty}`,
      name: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      image: `  ${shipping}`,
      name: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      image: `${support}`,
      name: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <S.StorerInfoSection>
      {credentials.map((credential) => (
        <S.Card key={credential.name}>
          <img src={credential.image} alt={credential.name} />
          <dt>{credential.name}</dt>
          <dd>{credential.description}</dd>
        </S.Card>
      ))}
    </S.StorerInfoSection>
  );
}

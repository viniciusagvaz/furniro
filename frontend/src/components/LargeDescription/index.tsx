import * as S from "./styles";
import { Button } from "../Buttons";


export const LargeDescription = () => {
  return (
    <S.LargeDescription>
      <div style={{ display: "flex", gap: "3rem" }}>
        <Button
          variant="newsletter"
          children="Description"
          style={{ borderBottom: "none", fontSize: "1.5rem" }}
        />
        <Button
          variant="newsletter"
          children="Aditional Information"
          style={{
            borderBottom: "none",
            fontSize: "1.5rem",
            fontWeight: "400",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          lineHeight: "1.5",
          color: "#9f9f9f",
        }}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          consectetur ducimus repellat laborum, natus minima impedit sint hic
          autem quos, neque harum facere tempore quo?
        </p>
        <p>
          Vitae nihil voluptate ullam repellat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maiores fugiat velit maxime. Soluta
          porro mollitia et labore corrupti dolores quisquam id doloribus
          delectus fugiat, error ipsum vero eius facere autem. Vitae nihil
          voluptate ullam repellat. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores fugiat velit maxime. Soluta porro mollitia
          et labore corrupti dolores quisquam id doloribus delectus fugiat,
          error ipsum vero eius facere autem.
        </p>
      </div>
    </S.LargeDescription>
  );
};



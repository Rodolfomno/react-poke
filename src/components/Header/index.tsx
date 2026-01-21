import { Button, Buttons, StyleHeader } from "./styles";
import pokedexImg from "../../assets/pokedex.png";

export default function Header() {
  return (
    <StyleHeader>
      <img
        src={pokedexImg}
        alt="pokemon"
        width={124}
        height={39}
      />

      <Buttons>
        <Button to="/" end>
          Home
        </Button>
        <Button to="/pokedex">
          PokeDéx
        </Button>
      </Buttons>
    </StyleHeader>
  );
}

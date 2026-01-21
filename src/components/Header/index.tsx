import { useState } from "react";
import {
  Button,
  Buttons,
  StyleHeader,
  MenuToggle,
  MobileMenu
} from "./styles";
import pokedexImg from "../../assets/pokedex.png";

export default function Header() {
  const [open, setOpen] = useState(false);

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
          PokéDex
        </Button>
      </Buttons>

      <MenuToggle onClick={() => setOpen(!open)}>
        ☰
      </MenuToggle>

      {open && (
        <MobileMenu>
          <Button to="/" end onClick={() => setOpen(false)}>
            Home
          </Button>
          <Button to="/pokedex" onClick={() => setOpen(false)}>
            PokéDex
          </Button>
        </MobileMenu>
      )}
    </StyleHeader>
  );
}

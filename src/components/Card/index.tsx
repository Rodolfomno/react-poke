import type { Pokemon } from "../../types/pokeTypes";
import { Card, Name, TypeBadge, Types } from "./styles";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Card>
      <Types>
          <TypeBadge key={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</TypeBadge>
      </Types>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} height={143} width={143}/>
      <Name>{pokemon.name}</Name>
    </Card>
  );
}

import type { Pokemon } from "../../types/pokeTypes";
import { Card, Name, TypeBadge, Types } from "./styles";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Card>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <Types>
        {pokemon.types.map(t => (
          <TypeBadge key={t.type.name}>{t.type.name}</TypeBadge>
        ))}
      </Types>
    </Card>
  );
}

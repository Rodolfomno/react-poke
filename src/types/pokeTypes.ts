export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: PokemonListItem[];
  count: number;
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}

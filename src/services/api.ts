import type { Pokemon, PokemonListResponse } from "../types/pokeTypes";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemons(
  limit: number,
  offset: number
): Promise<PokemonListResponse> {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.json();
}

export async function getPokemonDetails(url: string): Promise<Pokemon> {
  const response = await fetch(url);
  return response.json();
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!response.ok) throw new Error("Pokémon não encontrado");
  return response.json();
}

export async function getPokemonsByType(type: string) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/type/${type}`
  );
  const data = await response.json();

  return Promise.all(
    data.pokemon.map((p: any) =>
      fetch(p.pokemon.url).then(res => res.json())
    )
  );
}


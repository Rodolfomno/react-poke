import { useEffect, useMemo, useState } from "react";
import { getPokemons, getPokemonDetails } from "../../services/api";
import type { Pokemon } from "../../types/pokeTypes";
import PokemonCard from "../../components/Card";
import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchInput";

import {
  HomeStyle,
  ListItems,
  Filters,
  Select,
} from "./styles";

const LIMIT = 18;

const POKEMON_TYPES = [
  { label: "Todos os tipos", value: "all" },
  { label: "Grass", value: "grass" },
  { label: "Fire", value: "fire" },
  { label: "Water", value: "water" },
  { label: "Bug", value: "bug" },
  { label: "Normal", value: "normal" },
  { label: "Electric", value: "electric" },
  { label: "Poison", value: "poison" },
  { label: "Ground", value: "ground" },
  { label: "Fairy", value: "fairy" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAllPokemons() {
      try {
        setLoading(true);

        const data = await getPokemons(53, 0);

        const details = await Promise.all(
          data.results.map(pokemon =>
            getPokemonDetails(pokemon.url)
          )
        );

        setAllPokemons(details);
      } finally {
        setLoading(false);
      }
    }

    loadAllPokemons();
  }, []);

  const filteredPokemons = useMemo(() => {
    return allPokemons.filter(pokemon => {
      const matchName = pokemon.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchType =
        typeFilter === "all" ||
        pokemon.types.some(t => t.type.name === typeFilter);

      return matchName && matchType;
    });
  }, [allPokemons, search, typeFilter]);

  const totalPages = Math.ceil(filteredPokemons.length / LIMIT);

  const paginatedPokemons = filteredPokemons.slice(
    (page - 1) * LIMIT,
    page * LIMIT
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [page, totalPages]);

  return (
    <HomeStyle>
      <Filters>
        <SearchInput value={search} onChange={setSearch} />

        <Select
          id="type"
          name="type"
          value={typeFilter}
          onChange={e => {
            setTypeFilter(e.target.value);
            setPage(1);
          }}
        >
          {POKEMON_TYPES.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>
      </Filters>

      <ListItems>
        {loading && <p>Carregando...</p>}

        {!loading &&
          paginatedPokemons.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))}
      </ListItems>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </HomeStyle>
  );
}

import { useEffect, useState } from "react";
import { getPokemons, getPokemonDetails } from "../../services/api";
import type { Pokemon } from "../../types/pokeTypes";
import Pagination from "../../components/Pagination";
import { HomeStyle, ListItems } from "./styles";
import PokemonCard from "../../components/Card";
import SearchInput from "../../components/SearchInput";

const LIMIT = 18;

export default function Home() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function loadPokemons() {
      const offset = (page - 1) * LIMIT;

      const data = await getPokemons(LIMIT, offset);

      const details = await Promise.all(
        data.results.map(pokemon => getPokemonDetails(pokemon.url))
      );

      setPokemons(details);
      // setTotalPages(Math.ceil(data.count / LIMIT));
    }

    loadPokemons();
  }, [page]);

  return (
    <HomeStyle>
      <SearchInput value={search} onChange={setSearch} />

      <ListItems>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ListItems>

      <Pagination
        currentPage={page}
        totalPages={3}
        onPageChange={setPage}
      />
    </HomeStyle>
  );
}

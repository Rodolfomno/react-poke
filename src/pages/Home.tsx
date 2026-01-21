import { useState } from "react";
import SearchInput from "../components/SearchInput";
import { HomeStyle, ListItems } from "../components/styles";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <HomeStyle>
      <SearchInput
        value={search}
        onChange={setSearch}
      />
      <ListItems>
        
      </ListItems>
    </HomeStyle>
    );
}
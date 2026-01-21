import { Wrapper, Input, IconWrapper } from "./styles";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Faça uma busca pelo nome do pokémon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <IconWrapper>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </IconWrapper>
    </Wrapper>
  );
}

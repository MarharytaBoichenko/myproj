export interface SearchState {
  search: string;
}

export interface SearchLineProps {
  search: string;
  setInputSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchProps {
  submitSearch: (searchState: SearchState | null) => void;
}

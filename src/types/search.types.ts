export interface SearchState {
  search: string;
}

export interface SearchLineProps {
  search: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchProps {
  submitSearch: (searchState: SearchState) => void;
}

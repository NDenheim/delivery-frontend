import { FormEventHandler } from "react";
// import { Product } from "../../data/types";
import "./SearchBar.scss";

type SearchBarProps = {
  //   products: Product[];
  handleSearch: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  return (
    <div>
      <label htmlFor="name"> Search by name: </label>
      <input type="text" onInput={handleSearch} />
    </div>
  );
};

export default SearchBar;

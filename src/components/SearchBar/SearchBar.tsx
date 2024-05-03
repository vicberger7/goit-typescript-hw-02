import { useState, FC, ChangeEvent, FormEvent } from "react";
import { FiSearch } from "react-icons/fi";
import style from "./SearchBar.module.css";
import { toast, Toaster } from "react-hot-toast";


interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeSearchValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const onHandleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (searchValue.trim() === "") {
      toast.error("Sorry. Search field can not be empty");
      return;
    }
    onSearch(searchValue);
    setSearchValue("");
  };
  return (
    <header className={style.searchHeader}>
      <div>
        <Toaster />
      </div>
      <form className={style.form} onSubmit={onHandleSubmit}>
        <button className={style.searchButton} type="submit">
          <FiSearch size="16px" />
        </button>
        <input
          className={style.input}
          type="text"
          placeholder="Search images and photos"
          name="search"
          autoComplete="off"
          autoFocus
          onChange={onChangeSearchValue}
          value={searchValue}
        />
      </form>
    </header>
  );
};

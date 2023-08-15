"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";
import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      router.push(searchText);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter your search"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;

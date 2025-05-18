"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  function handleSearchParams(value) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    push(`${pathname}?${params.toString()}`);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    handleSearchParams(search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-1/2">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search for a recipe"
          name="search"
          onChange={handleChange}
          value={search}
        />
        <Button
          variant="ghost"
          type="submit"
          className="text-primary cursor-pointer absolute right-0 top-0"
        >
          <SearchIcon className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;

import React from "react";
import Recipes from "@/components/Recipes";
import SearchBar from "@/components/SearchBar";

const Home = async ({ searchParams }) => {
  const query = searchParams.query || "";
  const page = searchParams.page || 1;

  console.log("Fetching page:", page); // Debugging: Check if the page is updating

  const apiUrl = query
    ? `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=12&offset=${
        (page - 1) * 12
      }`
    : `https://api.spoonacular.com/recipes/random?number=12`;

  const response = await fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.SPOONACULAR_API_KEY,
    },
    cache: "no-store", // ✅ Prevents caching and forces fresh data
  });

  const data = await response.json();
  const recipes = data.recipes ?? data.results ?? [];
  const totalResults = data.totalResults ?? 100;

  return (
    <>
      <div className="mb-5">
        <SearchBar />
      </div>
      <Recipes
        recipes={recipes}
        query={query}
        page={page}
        totalResults={totalResults}
      />
    </>
  );
};

export default Home;

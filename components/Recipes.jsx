import React from "react";
import RecipeCard from "@/components/RecipeCard";
import { Tinos } from "next/font/google";
import Link from "next/link";

const tinos = Tinos({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Recipes = ({ recipes, query, page, totalResults }) => {
  const currentPage = parseInt(page);
  const totalPages = Math.ceil(totalResults / 12);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className={`${tinos.className} text-2xl lg:text-4xl font-bold`}>
          Learn Different Recipes
        </h1>
        <div className="flex items-center gap-5">
          <div
            className={`${tinos.className} flex flex-col items-center gap-0`}
          >
            <p className="text-xl text-primary font-bold">5,000+</p>
            <p className="text-sm font-light">recipes</p>
          </div>
          <div
            className={`${tinos.className} flex flex-col items-center gap-0`}
          >
            <p className="text-xl font-bold text-primary">2,600+</p>
            <p className="text-sm font-light">ingredients</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-3 mt-5">
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link
            href={`/?query=${query}&page=${currentPage - 1}`}
            className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Previous
          </Link>
        )}

        {/* Page Numbers */}
        {pageNumbers.map((num) => (
          <Link
            key={num}
            href={`/?query=${query}&page=${num}`}
            className={`px-3 py-1 rounded-md ${
              num === currentPage
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
            }`}
          >
            {num}
          </Link>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <Link
            href={`/?query=${query}&page=${currentPage + 1}`}
            className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Recipes;

import Image from "next/image";
import React from "react";

const spoonacularApiKey = process.env.SPOONACULAR_API_KEY;

const Recipe = async ({ params }) => {
  const { id } = await params;
  const getRecipe = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information`,
    {
      headers: {
        "x-api-key": process.env.SPOONACULAR_API_KEY,
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  const recipe = await getRecipe.json();

  return (
    <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-3">
      <div className="col-span-1">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={500}
          height={500}
          className="w-full object-cover rounded-lg"
        />
        <p className="text-lg lg:text-xl text-primary font-bold mt-5">
          Food Specifications
        </p>
        <div className="grid grid-cols-4">
          <p className="col-span-2 text-gray-600 text-sm lg:text-base">
            Cooking Duration:
          </p>
          <p className="col-span-2 font-semibold text-sm lg:text-base">
            {recipe.readyInMinutes} Minutes
          </p>
        </div>
        <div className="grid grid-cols-4">
          <p className="col-span-2  text-gray-600 text-sm lg:text-base">
            Vegan:
          </p>
          <p className="col-span-2 font-semibold text-sm lg:text-base">
            {recipe.vegan ? "Yes" : "No"}
          </p>
        </div>
        <div className="grid grid-cols-4">
          <p className="col-span-2  text-gray-600 text-sm lg:text-base">
            Servings:
          </p>
          <p className="col-span-2 font-semibold text-sm lg:text-base">
            {recipe.servings} Person
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2">{recipe.title}</h1>
        <p className="text-lg lg:text-xl font-bold text-primary">Ingredients</p>
        <ul className="grid grid-cols-2 gap-x-5 list-disc mt-2">
          {recipe.extendedIngredients.map((ingredients, index) => (
            <li
              key={index}
              className="ml-4 text-gray-600 capitalize text-sm lg:text-base"
            >
              {ingredients.amount} {ingredients.unit} {ingredients.nameClean}
            </li>
          ))}
        </ul>

        <p className="text-lg lg:text-xl font-bold text-primary mt-5">
          Instructions
        </p>
        <ul className="text-gray-600 text-sm lg:text-base list-decimal pl-5 space-y-2">
          {recipe.analyzedInstructions.map((instruction, index) => (
            <div key={index}>
              {instruction.steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;

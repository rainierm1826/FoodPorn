import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RecipeCard = ({ recipe }) => {
  return (
    <Card className="p-0 h-full">
      <CardContent className="p-0 relative">
        <Link href={`/recipe/${recipe.id}`} passHref>
          <div className="cursor-pointer">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={100}
              height={100}
              className="w-full h-full max-h-[200px] object-cover rounded-t-lg"
            />
            <Badge
              className={`${
                recipe.vegan ? "bg-green-500" : "bg-red-500"
              } absolute top-2 right-2 text-white`}
            >
              {recipe.vegan ? "Vegan" : "Non-Vegan"}
            </Badge>
          </div>
        </Link>
      </CardContent>

      <CardHeader className="pl-2 pb-0">
        <CardTitle className="text-sm font-bold truncate">
          {recipe.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4" />
          {recipe.readyInMinutes} minutes
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default RecipeCard;

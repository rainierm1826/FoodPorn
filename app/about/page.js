import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { aboutItems } from "@/lib/obj";
const About = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full mb-10">
      <p className="text-2xl font-bold text-primary">About This Website</p>
      <p className="text-sm text-gray-500 text-center">
        This website is a recipe website that allows you to <br /> search for
        recipes by name or by ingredients.
      </p>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-5 w-full justify-center items-center h-[450px]">
        {aboutItems.map((item, index) => (
          <Card key={index} className="p-0 rounded-lg h-full">
            <CardContent className="p-0">
              <Image
                src={item.image}
                alt="about"
                width={100}
                height={100}
                className="w-full h-full max-h-[200px] object-cover overflow-hidden rounded-lg"
              />
            </CardContent>
            <CardHeader className="px-2">
              <CardTitle className="text-lg font-bold text-center">
                {item.title}
              </CardTitle>
              <CardDescription className="text-gray-600 px-2">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;

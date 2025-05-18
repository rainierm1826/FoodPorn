import { CookingPot, Users } from "lucide-react";

export const navItems = [
  {
    icon: CookingPot,
    label: "Recipes",
    link: "/",
  },
  {
    icon: Users,
    label: "About",
    link: "/about",
  },
];

export const aboutItems = [
  {
    image: "/about1.webp",
    title: "Human-Computer Interaction Project",
    description:
      "This project explores the principles of Human-Computer Interaction (HCI) by designing a user-friendly website with three navigational elements. It aims to enhance user experience through intuitive design and seamless interaction.",
  },
  {
    image: "/about2.jpg",
    title: "Food Porn",
    description:
      "Food Porn is a powerful platform where you can easily search for food and recipes. Discover thousands of recipes with smart search capabilities and step-by-step cooking guides.",
  },
  {
    image: "/about3.jpg",
    title: "Built with Next.js and Spoonacular",
    description:
      "This project is developed using Next.js for its fast rendering and scalability, alongside the Spoonacular API to fetch a wide array of food recipes and nutritional information.",
  },
];

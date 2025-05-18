import React from "react";
import { Imperial_Script } from "next/font/google";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <h1 className={`${imperialScript.className} text-md lg:text-4xl font-extrabold`}>
      Food<span className="text-primary">Porn</span>.
    </h1>
  );
};

export default Logo;

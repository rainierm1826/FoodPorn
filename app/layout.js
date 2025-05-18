import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "FoodPorn",
  description: "FoodPorn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="grid grid-cols-1 md:grid-cols-5 bg-secondary">
          <div className="col-span-1 md:col-span-1 bg-white md:sticky md:top-0 md:h-screen md:overflow-y-auto">
            <Sidebar />
          </div>
          <div className="col-span-7 m-5 md:col-span-4">{children}</div>
        </div>
      </body>
    </html>
  );
}

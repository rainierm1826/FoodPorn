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
        <div className="grid grid-cols-8 lg:grid-cols-5 bg-secondary">
          <div className="col-span-1 lg:col-span-1 bg-white sticky top-0 h-screen overflow-y-auto">
            <Sidebar />
          </div>
          <div className="col-span-7 m-5 lg:col-span-4">{children}</div>
        </div>
      </body>
    </html>
  );
}

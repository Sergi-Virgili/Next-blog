import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="main_container main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

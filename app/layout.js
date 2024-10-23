// app/layout.js
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
// import AuthProvider from "./AuthProvider";
import AuthProvider from "@/components/ClientComponents";

const notoSansThai = Noto_Sans_Thai({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Ink Make Over",
  description: "Ink Make Over Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansThai.className}>
        <AuthProvider>
          <div className="relative z-50">
            <Nav />
          </div>
          <div className="relative z-0 mt-11">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
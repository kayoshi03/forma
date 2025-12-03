import type { Metadata } from "next";
import { Header } from "@/components/layout/header/Header";
import {Open_Sans}  from "next/font/google"
import "./globals.scss";
import { Provider } from "@/utils/Provider";

const OpenSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Forma",
  description: "Online fashion store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        <Header/>
        <Provider>
          <div className="container">
            <div className="wrapper">
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}

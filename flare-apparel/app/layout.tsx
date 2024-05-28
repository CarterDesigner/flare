import type { Metadata } from "next";
import Head from "next/head";
import { roboto } from "./ui/fonts";
import "./globals.css";
import Navigation from "./ui/navigation/page";

export const metadata: Metadata = {
  title: "Flare Apparel",
  description: "Next Generation of clothing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen min-h-screen overflow-hidden overflow-y-scroll">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className={`w-full h-full ${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/component/Nav";
import Footer from "@/component/Footer";

export const metadata: Metadata = {
  title: "Travel App - NextJS",
  description: "NextJS Beginner App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

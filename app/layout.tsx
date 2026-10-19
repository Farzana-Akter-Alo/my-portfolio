
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio | Developer",
  description:
    "Explore my portfolio, technical skills, education, and web development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FFFBFE] font-sans text-[#392747] antialiased">
        {children}
      </body>
    </html>
  );
}

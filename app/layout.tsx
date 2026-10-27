import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqilah Radhiah | Software Engineer",
  description:
    "Portfolio of Nur Aqilah Radhiah, a Computer Science (Software Engineering) graduate from UNITEN with experience in web development, software testing, and data analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshay Srivastava | AI Developer & Software Engineer",
  description: "Portfolio of Lakshay Srivastava - AI Developer specializing in intelligent systems, machine learning applications, and modern developer tools.",
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

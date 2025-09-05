import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI.exe - Retro App",
  description: "A nostalgic AI application with 8-bit styling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/nes.css@latest/css/nes.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import StyledComponentsRegistry from "../lib/AntdRegistry";

export const metadata: Metadata = {
  title: "JS dev homework",
  description:
    "Single web application that consumes data from remote API and renders pulled data in charts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

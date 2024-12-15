import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BoardProvider } from "@/context/myContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DrawTogether",
  description: "Online multiuser drawing board.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/new_favicon.ico" type="image/x-icon" />
      <BoardProvider>
        <body className={inter.className}>
          <ToastContainer autoClose={3500} />
          {children}
        </body>
      </BoardProvider>
    </html>
  );
}

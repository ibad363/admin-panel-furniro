import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import CommonLayout from "@/components/CommonLayout";
import Authorizer from "@/components/auth/Authorizer";

export const metadata: Metadata = {
  title: "Furniro Admin Panel",
  description: "Furniro Admin Panel",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`antialiased ${inter.className}`}>
          {/* Conditionally render layout based on the route */}
          <Authorizer>{children}</Authorizer>
        </body>
      </html>
    </ClerkProvider>
  );
}

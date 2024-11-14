'use client'

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google"
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {pathname === "/" ? (
            <div>
              {children}
            </div>

          ) : (
            <Sidebar>
              {children}
            </Sidebar>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}

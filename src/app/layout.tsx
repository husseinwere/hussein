import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ContextProviders from "@/context";
import TemplateContainer from "@/components/TemplateContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hussein",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ContextProviders>
            <TemplateContainer>{children}</TemplateContainer>
          </ContextProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

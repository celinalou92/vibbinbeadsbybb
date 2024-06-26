import type { Metadata } from "next";
import { Playfair_Display, Bad_Script } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
// const badScript = Bad_Script({ subsets: "latin"[] });

export const metadata: Metadata = {
  title: "Vibin Beads By BB",
  description: "High quality custom beaded jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className} style={{ padding: '0 20%' }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

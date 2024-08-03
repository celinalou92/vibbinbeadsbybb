import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "@/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vibin Beads By BB",
  description: "High quality custom beaded jewelry",
};

export default function LinkTreeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        className={playfairDisplay.className}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

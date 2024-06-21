import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { NavbarDemo } from "@/components/Shared/NavbarDemo";
import { NotificationProvider } from "@/components/provider/NotificationContext";
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Miten | Full Stack Web Developer</title>
      <meta name="description" content="Explore the portfolio of Miten Patel, a skilled Full Stack Developer specializing in modern web application development. Discover projects, skills, and get in touch." />
      <meta property="og:title" content="Miten | Full Stack Web Developer" />
      <meta property="og:description" content="Explore the portfolio of Miten Patel, a skilled Full Stack Developer specializing in modern web application development. Discover projects, skills, and get in touch." />
      <meta property="og:image" content='https://i.ibb.co/B3vqkrr/Screenshot-2024-06-19-013106.png' key="og_image_global" />
      <meta property="og:url" content="https://my-portfolio-kappa-bay.vercel.app/" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NotificationProvider>
            <NavbarDemo />
            {children}
          </NotificationProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

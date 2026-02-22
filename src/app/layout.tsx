import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "FoodPlus | Premium Food Delivery",
  description: "Experience the finest food delivered to your doorstep with FoodPlus.",
};

import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ProductProvider } from "@/context/ProductContext";
import { ThemeProvider } from "@/context/ThemeContext";
import CartSidebar from "@/components/CartSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <ProductProvider>
              <CartProvider>
                {children}
                <CartSidebar />
              </CartProvider>
            </ProductProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

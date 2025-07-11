import { Inter} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { AppContextProvider } from "../context/AppContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "DeepSeek - Appani",
  description: "Full Stack Project",
};    

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en">
          <body
            className={`${inter.className} antialiased`}
          >
            {children}
          </body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}

// This is the root layout of the DeepSeek application, which includes ClerkProvider for authentication and sets global styles.
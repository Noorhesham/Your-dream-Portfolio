import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
const inter = Orbitron({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "700"],
});
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { ThemeProvider } from "./context/ThemeProvider";

export const metadata: Metadata = {
  title: "add title",
  icons: { icon: "/boi.png" },
  openGraph: {
    type: "website",
    title: "add title",
    description: "add description.",
    images: [
      {
        url: "/noor.jpg",
        alt: "add title",
      },
    ],
    // url: "https://new-portfolio-noor-hesham.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {" "}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <>
            <NavBar />
            <main className=" overflow-hidden">
              {children}

              <Footer />
            </main>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}

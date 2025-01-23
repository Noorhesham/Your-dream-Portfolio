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
  title: "Noor Hesham Portfolio",
  icons: { icon: "/boi.png" },
  openGraph: {
    type: "website",
    title: "Noor Hesham Portfolio",
    description: "MERN Stack Developer specializing in React, Next.js, TypeScript, Node.js, MongoDB, and Tailwind CSS.",
    images: [
      {
        url: "/noor.jpg",
        alt: "Noor Hesham Portfolio",
      },
    ],
    url: "https://new-portfolio-noor-hesham.vercel.app",
  },
  description:
    "MERN Stack Developer specializing in React, Next.js, TypeScript,Node .js,Mongo DB and Tailwind CSS. Proven track record of crafting high-performance web applications with sleek, user-friendly interfaces. Adaptable and detail-oriented, committed to delivering top-notch solutions. Passionate about staying ahead in technology and contributing to dynamic teams.",
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

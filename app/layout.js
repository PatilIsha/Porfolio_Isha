import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import CustomCursor from "./components/helper/custom-cursor";
import Preloader from "./components/helper/preloader";
import ScrollProgress from "./components/helper/scroll-progress";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/animations.scss";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

const siteDescription =
  "Isha Patil is a Full Stack Developer and Computer Engineering graduate skilled in the MERN stack and backend development - building scalable web applications, designing RESTful APIs, and working with React, Next.js, Node.js, Express, and Spring Boot.";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "Portfolio of Isha Patil - Full Stack Developer",
  description: siteDescription,
  keywords: [
    "Isha Patil",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Backend Developer",
    "Pune Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Isha Patil" }],
  creator: "Isha Patil",
  openGraph: {
    title: "Isha Patil - Full Stack Developer",
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "Isha Patil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isha Patil - Full Stack Developer",
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <ToastContainer />
        <Navbar />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}

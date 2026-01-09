import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between space-y-12 py-12 px-6 sm:px-12 ${dmSans.className}`}
    >
      <Navbar />
      <div className="w-full max-w-2xl flex-grow flex flex-col">
        <Component {...pageProps} />
      </div>
      <div className="w-full max-w-2xl">
        <Footer />
      </div>
    </main>
  );
}

import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { usePathname } from "next/navigation";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const pathName = usePathname();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between space-y-16 py-16 px-12 ${dmSans.className}`}
    >
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={pathName} />
      </AnimatePresence>
    </main>
  );
}

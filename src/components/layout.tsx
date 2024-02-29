import { ReactNode } from "react";
import Navbar from "./navbar";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${dmSans.className}`}
    >
      <Navbar />
      <div>{children}</div>
    </main>
  );
}

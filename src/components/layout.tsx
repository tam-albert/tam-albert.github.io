import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{
        type: "spring",
        duration: 0.6,
        bounce: 0.15,
      }}
      className="w-1/2 grow"
    >
      {children}
    </motion.div>
  );
}

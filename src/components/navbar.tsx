import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navbarItems = [
    {
      href: "/",
      label: "about",
    },
    {
      href: "/projects",
      label: "projects",
    },
    {
      href: "/blog",
      label: "blog",
    },
  ];

  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between w-full max-w-2xl">
      <div className="text-2xl font-bold tracking-tight text-black">
        <Link href="/">Albert Tam</Link>
      </div>
      <div className="flex items-center space-x-6 text-sm font-medium text-gray-500">
        {navbarItems.map(({ href, label }) => {
          const isActive = pathName === href;
          return (
            <div
              key="label"
              className={`${
                isActive ? "text-black font-semibold" : "hover:text-black transition-colors"
              }`}
            >
              <Link href={href}>{label}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

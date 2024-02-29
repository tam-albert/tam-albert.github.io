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
  ];

  const activeClassNames = "text-black active";

  const pathName = usePathname();
  return (
    <div className="flex items-center w-1/2">
      <div className="grow text-4xl">Albert Tam</div>
      <div className="flex items-center space-x-4 text-gray-400">
        {navbarItems.map(({ href, label }) => {
          const isActive = pathName === href;
          return (
            <div
              key="label"
              className={`${
                isActive ? activeClassNames : "inactive"
              } custom-underline`}
            >
              <Link href={href}>{label}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

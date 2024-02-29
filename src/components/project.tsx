import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface ExternalLink {
  Icon: IconType;
  link: string;
}

interface ProjectProps {
  title: string | ReactNode;
  links: ExternalLink[];
  text: string | ReactNode;
}

export default function Project({ title, links, text }: ProjectProps) {
  return (
    <div
      className="
        border-l-2 border-yellow-600 rounded-r-xl
        p-4
        bg-amber-100/80"
    >
      <div className="flex items-center">
        <div className="text-xl font-bold">{title}</div>
        <div className="grow flex items-center justify-end">
          {links.map(({ Icon, link }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div>{text}</div>
    </div>
  );
}

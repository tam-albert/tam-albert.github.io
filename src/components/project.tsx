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
    <div className="group flex flex-col space-y-1">
      <div className="flex items-center justify-between gap-4">
        <div className="text-base font-medium text-black">{title}</div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {links.map(({ Icon, link }) => (
            <a
              href={link}
              key={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-gray-800 leading-relaxed text-sm">{text}</div>
    </div>
  );
}

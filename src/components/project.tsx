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
        group relative
        border-l-4 border-yellow-500 rounded-xl
        p-4
        bg-gradient-to-br from-amber-50/90 to-yellow-50/80
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-in-out
        hover:scale-[1.01]
        hover:border-yellow-600
        backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors">
          {title}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {links.map(({ Icon, link }) => (
            <a
              href={link}
              key={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-2 rounded-lg
                text-gray-600 hover:text-yellow-700
                hover:bg-yellow-100
                transition-all duration-200
                transform hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-gray-700 leading-relaxed">{text}</div>
    </div>
  );
}

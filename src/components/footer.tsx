import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = [
    {
      Icon: FaLinkedin,
      link: "https://linkedin.com/in/a-s-t",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/tam-albert",
    },
    {
      Icon: FaEnvelope,
      link: "mailto:altam@mit.edu",
    },
    {
      Icon: FaXTwitter,
      link: "https://twitter.com/tamsbert",
    },
  ];

  return (
    <footer className="flex space-x-2">
      {links.map(({ Icon, link }) => (
        <button
          key={link}
          className="
            flex justify-center items-center
            border border-slate-300/50 rounded-md
            transition hover:bg-slate-200/25"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5"
          >
            <Icon />
          </a>
        </button>
      ))}
    </footer>
  );
}

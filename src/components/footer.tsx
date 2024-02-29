import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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
  ];

  return (
    <footer className="flex space-x-2">
      {links.map(({ Icon, link }) => (
        <button
          key={link}
          className="
            flex justify-center items-center
            border border-slate-300/50 rounded-md
            transition hover:bg-slate-200/30"
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

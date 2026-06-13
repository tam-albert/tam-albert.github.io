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
    <footer className="flex space-x-6">
      {links.map(({ Icon, link }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </footer>
  );
}

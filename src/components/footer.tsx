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

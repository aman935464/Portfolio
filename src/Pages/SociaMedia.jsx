import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SociaMedia() {
  return (
    <div className="flex gap-5 text-3xl">
      <a
        href="https://github.com/aman935464"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/aman-maurya-400874293"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 transition"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

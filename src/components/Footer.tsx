import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="footer">
      <p>Glenn Vockings</p>
      <div className="personal-links">
        <a href="">
          <SiGithub />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}
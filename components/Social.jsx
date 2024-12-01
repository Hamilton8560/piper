import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaTiktok />, path: "https://www.tiktok.com/@gymfoxpyper" },
  // { icon: <FaLinkedinIn />, path: "" },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaTwitter />, path: "" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/thugym.fox" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi"

export function Footer() {
  const iconSize = 20;
  return (
    <div className="w-9/12 mx-auto bg-orange-300 flex justify-between">
      <p>Thanks for visiting!</p>
      <div className="flex gap-2">
        <Link href="https://github.com/fi9ish/">
          <TbBrandGithub>size={iconSize}</TbBrandGithub>
        </Link>
        <Link href="https://t.me/fi9ish">
          <FaTelegramPlane size={iconSize}></FaTelegramPlane>
        </Link>
        <Link href="https://twitter.com/FinishMee"><FiTwitter></FiTwitter></Link>
      </div>
    </div>
  );
}

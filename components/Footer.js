import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export function Footer() {
  const iconSize = 27;
  return (
    <div className="w-9/12 mx-auto flex justify-between mt-6 h-24 items-center px-8 rounded-xl rounded-b-none bg-green-900/70 text-white">
      <div className="flex flex-col text-lg font-bold">
        <p>Thanks for visiting!</p>
        <p>Made by @fi9ish</p>
      </div>
      <div className="flex gap-2">
        <Link href="https://github.com/fi9ish/" className="hover:text-yellow-400">
          <TbBrandGithub size={iconSize}></TbBrandGithub>
        </Link>
        <Link href="https://t.me/fi9ish" className="hover:text-yellow-400">
          <FaTelegramPlane size={iconSize}></FaTelegramPlane>
        </Link>
        <Link href="https://twitter.com/FinishMee" className="ml-1 hover:text-yellow-400">
          <FiTwitter size={iconSize}></FiTwitter>
        </Link>
      </div>
    </div>
  );
}

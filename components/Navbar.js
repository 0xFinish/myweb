import Link from "next/link";

export function Navbar() {
  return (
    <div class="w-full h-16 flex items-center justify-center fixed top-0">
      <div class="h-16 w-full rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 pb-1 px-1 rounded-t-none">
        <div class=" h-full w-full bg-gray-800 rounded-lg rounded-t-none flex items-center justify-between">
          <span className="flex">
            <Link className="" href="/">
              <p className="mx-5 px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md">
                Tymofii Finish
              </p>
            </Link>
            <Link className="my-2" href="/projects">
              <button className="mx-5">Projects</button>
            </Link>
            <Link className="my-2" href="/blog">
              <button className="mx-5">Blog</button>
            </Link>
          </span>
          <button className="mx-5 px-4">Source Code</button>
        </div>
      </div>
    </div>
  );
}

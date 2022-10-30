import Image from "next/image";
import photo from "../public/man.jpg";

export function Introduction() {
  return (
    <div className="my-20 p-4 max-w-screen-md mx-auto bg-slate-600 flex align-middle justify-between">
      <div className="flex flex-col px-4">
        <p className="py-3 font-bold text-lg">Hi, my name is Tim!</p>
        <p className="px-2">
          I am doing my best to develop and create React based stuff! lalalaal allallalal  alalalal
        </p>
        <p className="px-2">Never looking back!</p>
      </div>
      <Image
        className="rounded-full"
        alt="nice photo of me"
        src={photo}
        width={150}
        height={150}
      ></Image>
    </div>
  );
}

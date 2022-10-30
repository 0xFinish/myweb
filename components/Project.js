import Image from "next/image";

export function Project({ title, date, photo, description }) {
  return (
    <div className="flex h-[500px] max-w-md">
      <div className="rounded-xl w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="flex flex-col h-full bg-black rounded-lg">
          <Image className="rounded-t-lg"alt="beautiful photo!" src={photo}></Image>
          <p>{title}</p>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

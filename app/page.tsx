import Image from "next/image";
import avatarImage from "@/public/assets/avatar.png";

export default function Page() {
  return (
    <div className="container px-4 md:mt-8 space-y-4">
      <div className="flex items-center space-x-4">
        <Image
          src={avatarImage}
          alt="Avatar"
          className="size-16 rounded-full ring ring-primary"
        />
        <div className="font-serif">
          <div className="text-2xl font-medium">Ashish Agarwal</div>
          <div className="text-xl text-gray-500">@devashish2024</div>
        </div>
      </div>
      <p className="text-lg">
        Welcome to my personal page! Here you'll find information about my
        projects, interests, and more. Feel free to explore and connect with me
        on social media.
      </p>
    </div>
  );
}

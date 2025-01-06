import { Guestbook } from "@/components/guestbook";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signs } from "@/lib/sign";
import { parseTimestamp } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Page() {
  return (
    <div className="container px-4 mb-12 md:mt-8 space-y-8 min-h-screen">
      <Guestbook />
    </div>
  );
}

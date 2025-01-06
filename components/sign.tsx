import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { parseTimestamp } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface GuestbookEntryProps {
  sign: {
    message: string;
    name: string;
    time: number;
    image: string;
    github: string | undefined;
  };
}

export function GuestbookEntry({ sign }: GuestbookEntryProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Avatar>
          <AvatarImage src={sign.image} alt={`${sign.name}'s avatar`} />
          <AvatarFallback>{sign.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-lg font-serif">{sign.name}</CardTitle>
          <p className="text-sm text-muted-foreground font-serif">
            {parseTimestamp(sign.time)}
          </p>
        </div>
        {sign.github && (
          <Link href={sign.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        )}
      </CardHeader>
      <CardContent>
        <p className="font-serif text-lg">{sign.message}</p>
      </CardContent>
    </Card>
  );
}

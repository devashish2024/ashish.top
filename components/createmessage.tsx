import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ActionLink from "./ui/actionlink";

export function CreateMessage({ onSignOut }: { onSignOut: () => void }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting message:", message);
    setMessage("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif text-xl">Create Message</CardTitle>
        <CardDescription className="font-serif">
          Share your thoughts with me and other visitors.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="font-serif"
          />
          <Button variant={"outline"} type="submit" className="font-serif">
            Submit Message
          </Button>
          <ActionLink
            label="Sign out"
            href="#"
            onClick={onSignOut}
            className="ml-4 font-serif inline-flex"
          />
        </form>
      </CardContent>
    </Card>
  );
}

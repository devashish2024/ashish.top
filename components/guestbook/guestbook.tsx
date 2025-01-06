"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignIn } from "./signin";
import { GuestbookEntry } from "./sign";
import { CreateMessage } from "./createmessage";
import { signs } from "@/lib/sign";

export function Guestbook() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Card className="w-full border-0">
      <CardHeader>
        <CardTitle className="text-4xl font-semibold font-serif">
          Guestbook
        </CardTitle>
        <CardDescription className="text-lg font-serif">
          Leave a message for me below. It could be anything - appreceation,
          information, wisdom or even humor!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isSignedIn ? (
          <SignIn onSignIn={() => setIsSignedIn(true)} />
        ) : (
          <CreateMessage onSignOut={() => setIsSignedIn(false)} />
        )}
        <div className="space-y-4">
          {signs.map((sign, index) => (
            <GuestbookEntry key={index} sign={sign} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

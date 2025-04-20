"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { fetchEntries } from "@/lib/sign";
import type { GuestEntry } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLinkIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow, format } from "date-fns";

const EntryList: React.FC = () => {
  const [entries, setEntries] = useState<GuestEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetEntries = async () => {
      try {
        const fetchedEntries = await fetchEntries();
        if (fetchedEntries) {
          setEntries(fetchedEntries);
        }
      } catch (error) {
        console.error("Error fetching entries:", error);
        toast("Failed to load guestbook entries. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetEntries();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-2">No entries yet</h2>
        <p className="text-muted-foreground">
          Be the first to sign the guestbook!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-8">
      {entries.map((entry: GuestEntry, i) => (
        <Card
          key={i}
          className={
            entry.isOfficial
              ? "bg-blue-600 dark:bg-blue-800 border-blue-400 dark:border-blue-600 shadow-md"
              : ""
          }
        >
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={entry.authorAvatar} alt={entry.authorName} />
                <AvatarFallback>{entry.authorName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle
                  className={`text-lg flex items-center gap-[6px] ${
                    entry.isOfficial ? "text-white" : ""
                  }`}
                >
                  {entry.authorName}{" "}
                  {entry.isOfficial && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            src="/assets/icons/verified.svg"
                            width={20}
                            height={20}
                            alt="Original Creator"
                            className="size-5"
                            draggable={false}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Original Creator</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {entry.githubUsername && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            src="/assets/icons/github-dark.svg"
                            width={20}
                            height={20}
                            alt="GitHub"
                            className="size-5 hidden dark:block"
                            draggable={false}
                          />
                          <Image
                            src="/assets/icons/github-light.svg"
                            width={20}
                            height={20}
                            alt="GitHub"
                            className="dark:hidden size-5"
                            draggable={false}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <Link
                            href={`https://github.com/${entry.githubUsername}`}
                            target="_blank"
                            className="text-blue-400 dark:text-blue-800 flex gap-1 items-center"
                          >
                            @{entry.githubUsername}
                            <ExternalLinkIcon className="size-3" />
                          </Link>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p
              dangerouslySetInnerHTML={{ __html: entry.content }}
              className={entry.isOfficial ? "text-white" : ""}
            />
            <div>
              {entry?.edited && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="block">
                      <p
                        className={`text-sm mt-2 ${
                          entry.isOfficial
                            ? "text-white/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        Edited{" "}
                        {formatDistanceToNow(new Date(entry.updatedAt), {
                          addSuffix: true,
                        })}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-center font-semibold">
                        Last edited at:
                      </p>
                      <p className="text-center">
                        {format(new Date(entry.updatedAt), "PPpp")}
                      </p>
                      <p className="text-center text-xs text-muted mt-1">
                        {Intl.DateTimeFormat().resolvedOptions().timeZone}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="block">
                    <p className={`text-sm mt-2 ${entry.isOfficial ? "text-white/80" : "text-muted-foreground"}`}>
                      {formatDistanceToNow(new Date(entry.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-center font-semibold">Created at:</p>
                    <p className="text-center">
                      {format(new Date(entry.createdAt), "PPpp")}
                    </p>
                    <p className="text-center text-xs text-muted mt-1">
                      {Intl.DateTimeFormat().resolvedOptions().timeZone}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EntryList;

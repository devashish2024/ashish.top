import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseTimestamp(timestamp: number) {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - timestamp;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (seconds < 60) {
    return "Just now";
  } else if (minutes === 1) {
    return "A minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours === 1) {
    return "An hour ago";
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days === 1) {
    return "A day ago";
  } else if (days <= 6) {
    return `${days} days ago`;
  } else if (days <= 13) {
    return "A week ago";
  } else if (days <= 27) {
    const weeks = Math.floor(days / 7);
    return `${weeks} weeks ago`;
  } else if (months === 1) {
    return "A month ago";
  } else if (months < 12) {
    return `${months} months ago`;
  } else if (years === 1) {
    return "A year ago";
  } else {
    return `${years} years ago`;
  }
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

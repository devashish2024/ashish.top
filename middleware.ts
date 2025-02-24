import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const url = new URL(req.url);

  switch (url.pathname) {
    case "/projects":
      return NextResponse.redirect(new URL("/work", req.url));
    case "/experience":
      return NextResponse.redirect(new URL("/work", req.url));
    case "/home":
      return NextResponse.redirect(new URL("/", req.url));
    case "/interviews":
      return NextResponse.redirect(new URL("/highlights", req.url));
    case "/guestbook":
      return NextResponse.redirect(new URL("/sign", req.url));
    case "/s/v1":
      return NextResponse.redirect("https://v1.ashish.top");
    case "/s/gh":
      return NextResponse.redirect("https://github.com/devashish2024");
    case "/s/gh2":
      return NextResponse.redirect("https://github.com/vortexprime24");
    case "/s/dc":
      return NextResponse.redirect(
        "https://discordapp.com/users/1153023901203447940",
      );
    case "/s/mail":
      return NextResponse.redirect("mailto:me@ashish.top");
    default:
      return NextResponse.next();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",

    "/projects",
    "/experience",
    "/home",
    "/interviews",
    "/guestbook",
    "/s/v1",
    "/s/gh",
    "/s/gh2",
    "/s/dc",
    "/s/mail",
  ],
};

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",
//   ],
// };

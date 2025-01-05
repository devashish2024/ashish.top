import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  switch (url.pathname) {
    case "/projects":
      return NextResponse.redirect(new URL("/work", request.url));
    case "/home":
      return NextResponse.redirect(new URL("/", request.url));
    case "/highlights":
      return NextResponse.redirect(new URL("/interviews", request.url));
    case "/guestbook":
      return NextResponse.redirect(new URL("/sign", request.url));
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
}

export const config = {
  matcher: [
    "/projects", // we got work route not projects
    "/home", // not needed
    "/highlights", // redirect old routes to new ones
    "/guestbook", // redirect old routes to new ones

    // social and short links
    "/s/v1", // short link to old portfolio
    "/s/gh",
    "/s/gh2",
    "/s/dc",
    "/s/mail",
  ],
};

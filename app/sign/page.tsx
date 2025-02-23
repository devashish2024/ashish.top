import Guestbook from "@/components/guestbook";
import { Toaster } from "@/components/ui/sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Page() {
  return (
    <>
      <div className="container px-4 mb-12 mt-2 md:mt-4 space-y-4 min-h-screen">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Sign</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="space-y-6">
          <div>
            <div className="space-y-2">
              <div className="text-3xl font-semibold font-serif">
                Sign My Guestbook
              </div>
              <hr className="border-b w-full" />
            </div>
            <p className="mt-4">
              Leave a review for me or my website here. I'd love to hear from
              you! Please do not spam or post offensive content here.
            </p>
          </div>
          <Guestbook />
        </section>
      </div>
      {/* <div className="container mx-auto px-4 py-8">
      <Toaster />
      <Card className="w-full border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Guestbook</CardTitle>
          <CardDescription className="max-w-2xl">
            A simple, minimal and functional guestbook made with Next.js, Clerk,
            Prisma and Perspective API. Feel free to leave a message below and
            implement it into your portfolio, too!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Guestbook />
        </CardContent>
      </Card>
    </div> */}
    </>
  );
}

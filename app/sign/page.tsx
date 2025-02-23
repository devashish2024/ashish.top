import Guestbook from "@/components/guestbook";
import { Toaster } from "@/components/ui/sonner";
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
        <Toaster />
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
    </>
  );
}

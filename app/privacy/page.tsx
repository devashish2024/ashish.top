import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Privacy Policy — Ashish Agarwal",
  description: "Privacy Policy for ashish.top",
};

export default function Page() {
  return (
    <div className="container px-4 mb-12 mt-2 md:mt-4 space-y-6 min-h-screen max-w-3xl">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Privacy Policy</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground mt-1">Last updated: April 8, 2026</p>
      </div>

      <Separator />

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/90">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">1. Introduction</h2>
          <p>
            Welcome to ashish.top (&quot;Website&quot;). This Privacy Policy explains how
            Ashish Agarwal (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;) collects, uses, and protects
            information when you visit this Website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">2. Information Collected</h2>
          <p>
            <strong>Information you provide directly:</strong> When you use the contact form
            or guestbook, you may voluntarily submit your name, email address, and message
            content. This information is collected solely to respond to your inquiries and
            display guestbook entries.
          </p>
          <p>
            <strong>Automatically collected information:</strong> The Website may collect
            standard log data such as your IP address, browser type, referring URL, pages
            visited, and timestamps. This data is collected through hosting infrastructure
            and analytics services to understand site usage and improve performance.
          </p>
          <p>
            <strong>Cookies and similar technologies:</strong> The Website uses cookies to
            store your theme preference (light/dark mode). Third-party services embedded on
            this site, such as Google AdSense, may use cookies to serve relevant
            advertisements. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">3. How Information Is Used</h2>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>To respond to contact form submissions and inquiries</li>
            <li>To display guestbook entries on the Website</li>
            <li>To analyze site traffic and improve user experience</li>
            <li>To serve advertisements via Google AdSense</li>
            <li>To maintain the security and functionality of the Website</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">4. Third-Party Services</h2>
          <p>
            This Website uses the following third-party services that may collect data
            independently:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>
              <strong>Google AdSense</strong> — for serving advertisements. Google may use
              cookies to personalize ads based on your browsing activity. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme hover:underline underline-offset-2"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Vercel</strong> — for hosting and analytics infrastructure. See{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme hover:underline underline-offset-2"
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">5. Data Retention</h2>
          <p>
            Contact form submissions are retained only as long as necessary to respond to
            your inquiry. Guestbook entries are retained indefinitely as part of the
            Website&apos;s content unless you request removal. Automatically collected log data
            is retained according to the policies of the hosting and analytics providers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">6. Data Security</h2>
          <p>
            Reasonable measures are taken to protect your information from unauthorized
            access, alteration, or destruction. The Website is served over HTTPS to encrypt
            data in transit. However, no method of transmission over the Internet is 100%
            secure, and absolute security cannot be guaranteed.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">7. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of any personal
            information I hold about you. To exercise these rights, please contact me via
            the{" "}
            <a
              href="/contact"
              className="text-theme hover:underline underline-offset-2"
            >
              contact page
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">8. Children&apos;s Privacy</h2>
          <p>
            This Website does not knowingly collect personal information from children under
            13. If you believe a child has provided personal information through this
            Website, please contact me so I can take appropriate action.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">9. Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Any changes will be
            posted on this page with an updated revision date. Continued use of the Website
            after changes constitutes acceptance of the revised policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">10. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please reach out through
            the{" "}
            <a
              href="/contact"
              className="text-theme hover:underline underline-offset-2"
            >
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

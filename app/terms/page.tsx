import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Terms of Service — Ashish Agarwal",
  description: "Terms of Service for ashish.top",
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
            <BreadcrumbLink>Terms of Service</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground mt-1">Last updated: April 8, 2026</p>
      </div>

      <Separator />

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/90">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">1. Acceptance of Terms</h2>
          <p>
            By accessing and using ashish.top (&quot;Website&quot;), you agree to be bound by
            these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please
            do not use the Website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">2. Description of Service</h2>
          <p>
            This Website is a personal portfolio and blog operated by Ashish Agarwal. It
            showcases projects, skills, certifications, and provides features such as a
            contact form and guestbook. The Website is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">3. User Conduct</h2>
          <p>When using the Website, you agree not to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Submit false, misleading, or fraudulent information through any form</li>
            <li>
              Post or transmit content that is abusive, harassing, defamatory, obscene, or
              otherwise objectionable via the guestbook or contact form
            </li>
            <li>
              Attempt to interfere with or disrupt the Website&apos;s functionality, servers, or
              connected networks
            </li>
            <li>
              Use automated tools, bots, or scripts to access the Website without prior
              written consent
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Website or its
              underlying systems
            </li>
            <li>
              Reproduce, distribute, or create derivative works from the Website&apos;s content
              without permission, except as permitted by the open-source license of the
              codebase
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">4. Intellectual Property</h2>
          <p>
            The design, text, graphics, and other content on this Website are the property
            of Ashish Agarwal unless otherwise stated. The source code of this Website is
            open-source and available under its respective license on{" "}
            <a
              href="https://github.com/devashish2024/ashish.top"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme hover:underline underline-offset-2"
            >
              GitHub
            </a>
            . Use of the open-source code is governed by the terms of that license.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">5. Guestbook &amp; Contact Submissions</h2>
          <p>
            By submitting content through the guestbook or contact form, you grant Ashish
            Agarwal a non-exclusive, royalty-free right to display guestbook entries on the
            Website. Messages submitted through the contact form are private and will not be
            publicly displayed. All submissions are subject to content moderation, and any
            content deemed inappropriate may be removed without notice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">6. Third-Party Links &amp; Content</h2>
          <p>
            The Website may contain links to third-party websites and services. These links
            are provided for convenience only. Ashish Agarwal does not endorse, control, or
            assume responsibility for the content or practices of any third-party sites.
            Your use of third-party sites is at your own risk and subject to their
            respective terms and policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">7. Advertisements</h2>
          <p>
            This Website displays advertisements through Google AdSense. The presence of
            advertisements does not constitute an endorsement of the advertised products or
            services. Ad content is managed by Google and is subject to{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme hover:underline underline-offset-2"
            >
              Google&apos;s Advertising Policies
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">8. Disclaimer of Warranties</h2>
          <p>
            The Website is provided &quot;as is&quot; without warranties of any kind, either express
            or implied, including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement. Ashish Agarwal does not
            warrant that the Website will be uninterrupted, error-free, or free of viruses
            or other harmful components.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Ashish Agarwal shall not be
            liable for any indirect, incidental, special, consequential, or punitive damages
            arising out of or related to your use or inability to use the Website, even if
            advised of the possibility of such damages.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">10. Modifications to Terms</h2>
          <p>
            These Terms may be updated at any time. Changes will be posted on this page
            with an updated revision date. Your continued use of the Website after any
            modifications constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of
            India. Any disputes arising under these Terms shall be subject to the exclusive
            jurisdiction of the courts in Aligarh, Uttar Pradesh, India.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">12. Contact</h2>
          <p>
            If you have any questions about these Terms, please reach out through the{" "}
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

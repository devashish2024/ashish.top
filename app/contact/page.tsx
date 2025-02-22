"use client";

import avatarImage from "@/public/assets/avatar.png";
import Image from "next/image";
import ActionLink from "@/components/ui/actionlink";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { postContactEmail } from "@/actions/email";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full text-white dark:text-white" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function Page() {
  const [formVisible, setFormVisible] = useState(true);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    const result = await postContactEmail(formData);
    if (result) {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
        variant: "default",
      });
      setFormVisible(false);
    } else {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="container px-4 mb-12 mt-2 md:mt-4 space-y-12 min-h-screen">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Image
            src={avatarImage}
            alt="Avatar"
            priority
            className="size-16 rounded-full ring ring-primary"
          />
          <div className="font-serif">
            <div className="text-2xl font-medium">Ashish Agarwal</div>
            <Link
              href="https://github.com/devashish2024"
              target="_blank"
              className="text-xl text-gray-500 hover:text-primary"
            >
              @devashish2024
            </Link>
          </div>
        </div>
        <p className="text-lg">
          I'm always excited to connect with fellow developers, potential
          collaborators, or anyone interested in my work. Feel free to reach out
          using the form below or connect with me on social media!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-start sm:justify-start sm:items-center gap-2 sm:gap-4">
          {[
            {
              href: "https://www.linkedin.com/in/ashishagarwa/",
              icon: FaLinkedin,
              label: "ashishagarwa",
            },
            {
              href: "https://github.com/devashish2024",
              icon: FaGithub,
              label: "devashish2024",
            },
            {
              href: "https://github.com/vortexprime24",
              icon: FaGithub,
              label: "vortexprime24",
            },
            {
              href: "mailto:me@ashish.top",
              icon: Mail,
              label: "me@ashish.top",
            },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-serif transition-all duration-75"
            >
              <link.icon className="size-5" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {formVisible ? (
        <Card className="w-full max-w-screen-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-primary font-serif">
              Get in Touch
            </CardTitle>
            <CardDescription className="font-serif text-lg text-gray-800 dark:text-gray-200">
              If you have any questions, project in mind or just want to say hi,
              I would love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent className="font-serif">
            <form className="space-y-6" action={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input name="name" id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  name="subject"
                  id="subject"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  name="message"
                  id="message"
                  placeholder="Tell me more about your project, idea, or question..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-2xl mx-auto">
          <CardContent className="font-serif text-center py-8">
            <h2 className="text-2xl font-medium text-primary mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              Your message has been sent successfully. I'll get back to you as
              soon as possible.
            </p>
          </CardContent>
        </Card>
      )}
      <Toaster />
    </div>
  );
}

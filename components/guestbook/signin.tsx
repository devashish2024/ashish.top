import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub, FaGoogle } from "react-icons/fa";

interface SignInProps {
  onSignIn: () => void;
}

export function SignIn({ onSignIn }: SignInProps) {
  const handleSignIn = (provider: string) => {
    console.log(`Signing in with ${provider}`);
    onSignIn();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-serif">Sign In</CardTitle>
        <CardDescription className="font-serif">
          Sign in to leave a message in the guestbook.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex space-x-4">
        <Button
          variant="outline"
          className="font-serif"
          onClick={() => handleSignIn("GitHub")}
        >
          <FaGithub className="mr-2" /> GitHub
        </Button>
        <Button
          variant="outline"
          className="font-serif"
          onClick={() => handleSignIn("Google")}
        >
          <FaGoogle className="mr-2" /> Google
        </Button>
      </CardContent>
    </Card>
  );
}

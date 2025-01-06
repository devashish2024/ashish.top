import { Html } from "@react-email/components";
import { Head } from "@react-email/components";
import { Body } from "@react-email/components";
import { Container } from "@react-email/components";
import { Text } from "@react-email/components";
import { Section } from "@react-email/components";
import { Link } from "@react-email/components";

export default function EmailTemplate({
  name,
  subject,
  message,
}: {
  name: string;
  subject: string;
  message: string;
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>Thank you for contacting Ashish.</Text>
          <Text style={paragraph}>Hello {name},</Text>
          <Text style={paragraph}>
            Thank you for reaching out through my website. I have received your
            message and will get back to you as soon as possible, usually within
            24-48 hours.
          </Text>
          <Text style={paragraph}>Here is what you inputted:</Text>
          <Text style={paragraph}>
            <b>Subject</b>: {subject}
          </Text>
          <Text style={paragraph}>
            <b>Message</b>:{" "}
            {message.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Text>
          <Text style={paragraph}>
            In the meantime, feel free to check out my latest projects on my
            portfolio or connect with me on social media:
          </Text>
          <Section style={list}>
            <Text style={listItem}>
              <Link href="https://github.com/devashish2024" style={link}>
                GitHub
              </Link>
            </Text>
            <Text style={listItem}>
              <Link
                href="https://www.linkedin.com/in/ashishagarwa/"
                style={link}
              >
                LinkedIn
              </Link>
            </Text>
            <Text style={listItem}>
              <Link
                href="https://discordapp.com/users/1153023901203447940"
                style={link}
              >
                Discord
              </Link>
            </Text>
          </Section>
          <Text style={paragraph}>I look forward to our conversation!</Text>
          <Text style={signature}>
            Best regards,
            <br />
            Ashish Agarwal
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const list = {
  padding: "0",
  margin: "0 0 15px",
};

const listItem = {
  margin: "10px 0",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const link = {
  color: "#0070f3",
  textDecoration: "none",
};

const signature = {
  marginTop: "32px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

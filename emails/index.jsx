import {
  Body,
  Hr,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

export const Email = ({ password }) => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          hs-webfonts="true"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,500;0,600;0,700;1,600&display=swap"
        />
        <title>Pass Safe</title>
        <meta property="og:title" content="Pass Safe" />
      </Head>
      <Preview>Get your Random Password</Preview>
      <Body style={main}>
        <Container>
          {/* logo */}
          <Section style={logo}>
            <Img
              src="https://pass-safe.netlify.app/logo.png"
              width={50}
              height={50}
              alt="logo"
            />
          </Section>

          <Section style={content}>
            {/* header */}
            <Section
              style={{
                background: "#050c1f",
                color: "#fff",
                padding: "12px 18px",
              }}
            >
              <Img
                src="https://pass-safe.netlify.app/logo.png"
                width={300}
                height={280}
                alt="banner"
                style={{ maxWidth: "100%", margin: "0px auto" }}
              />
              <Heading
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                🎉Congrats🎉
              </Heading>
              <Heading
                style={{
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                You have Successfully Generated your Password
              </Heading>
            </Section>

            <Section>
              <Row
                style={{
                  ...boxInfos,
                  paddingBottom: "0",
                  marginBottom: "20px",
                }}
              >
                <Column>
                  <Text
                    style={{
                      ...paragraph,
                    }}
                  >
                    Here is your random password:
                  </Text>

                  <code style={code}>{password}</code>
                  <Hr />

                  <Text
                    style={{
                      ...paragraph,
                      paddingLeft: 32,
                    }}
                  >
                    <b>KEEP IT SAFE!</b>
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* footer */}
            <Section style={{ backgroundColor: "#F5F8FA", width: "100%" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "#99ACC2",
                }}
              >
                Made with 💖 by{" "}
                <Link href="https://thedevguy.in" color="#050c1f">
                  {" "}
                  TheDevGuy{" "}
                </Link>
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;

// Email.PreviewProps = {
//   password: "something",
// };

const main = {
  backgroundColor: "#fff",
  color: "#121212",
  fontFamily: "'Roboto Mono', monospace",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.2)",
  borderRadius: "3px",
  overflow: "hidden",
};

const code = {
  fontWeight: "600",
  fontSize: 20,
  display: "inline-block",
  padding: "14px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "rgb(0,0,0, 0.6)",
};

const paragraph = {
  fontSize: 14,
};

const logo = {
  padding: "30px 20px",
};

const boxInfos = {
  padding: "20px",
};

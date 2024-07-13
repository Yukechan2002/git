import Link from "next/link";
import Image from "next/image";
import { ButtonAlt, Section } from "../../styles/styles";
import { CardContactContainer, CardContactContent } from "./styles";
import { TelegramLogo } from "phosphor-react";

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className="ellipse">
          <Image
            width={330}
            height={410}
            src="/vectors/circles.svg"
            alt="circles"
          />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>Let's talk!</h2>
            <p>
              If you have any questions or would just like to say hello, get in
              touch with me. I'll do my best to get back to you!
            </p>
          </div>

          <div className="contact">
            <Image
              width={480}
              height={500}
              src="/contact.svg"
              alt="contact image"
            />
          </div>
        </CardContactContent>

        <Link href={"/contact"}>
          <ButtonAlt>
            Get in touch{" "}
            <TelegramLogo
              style={{
                marginBottom: "-0.1rem",
                marginLeft: "0.2rem",
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  );
}

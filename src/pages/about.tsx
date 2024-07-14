import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { BiUserPin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { Links } from "../components/Links";
import { ButtonAlt, Section, Title } from "../styles/styles";
import * as S from "../styles/about";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Yukesh Chandran </title>
        <meta
          name="description"
          content="My name is Yukesh Chandran, I'm a MERN stack developer."
        />
        <meta property="og:title" content="About | Yukesh Chandran" />
        <meta
          property="og:description"
          content="My name is Yukesh Chandran, I'm a MERN stack developer."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            About
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/IMG_1190.jpg"
                alt="Profile image of Yukesh"
              />

              <div className="links">
                <ul>
                  <Link href={"https://github.com/Yukechan2002"}>
                    <a target="_blank" aria-label="Link to Github">
                      <AiFillGithub size={25} /> @Yukechan2002
                    </a>
                  </Link>
                  <Link href={"https://www.linkedin.com/in/yukesh-chandran/"}>
                    <a target="_blank" aria-label="Link to Linkedin">
                      <BsLinkedin size={25} /> @yukesh-chandran
                    </a>
                  </Link>
                  <Link
                    href={"https://api.whatsapp.com/send?phone=9500698294"}
                  >
                    <a target="_blank" aria-label="Link to WhatsApp">
                      <RiWhatsappFill size={25} /> +91 95006-98294
                    </a>
                  </Link>
                  <Link href={"mailto:yukeshchandran002@gmail.com"}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link to email"
                    >
                      <GrMail size={25} /> @yukeshchandran002@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>Let's chat, maybe create an awesome project together?</h3>
                <p>Send me a message! 😉</p>
                <Link href={"/contact"}>
                  <a>
                    <ButtonAlt>Contact</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
                My name is Yukesh Chandran , I'm a Full stack developer, passionate about designing and coding. My specialty is
                creating user interfaces and functionalities for web
                applications using MERN stack.
              </p>
              <p>
                I started my journey in university with the initial goal of
                studying Systems Analysis and Development. I've always been
                interested in computers and curious about creating web pages.
                So, I decided to combine these two passions and enrolled in
                college to explore the possibilities in the IT field.
              </p>
              
              <p>
                The following year, in 2022, I realized I needed to set a clear
                goal. That's when I directed my efforts to improve my skills in
                HTML, CSS, and JavaScript, aiming to build web applications and
                deepen my learning. That was the starting point for me to become
                a web developer.
              </p>
            
              <p>
                I continue to study and develop personal projects to expand my
                knowledge, focusing on the JavaScript ecosystem for front-end
                development using ReactJS, JavaScript, Next.js, among others.
              </p>
              <p>
                I am always looking for challenges and opportunities to grow
                professionally, and I am excited to contribute to interesting
                and innovative projects in the field of web development.
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  );
}

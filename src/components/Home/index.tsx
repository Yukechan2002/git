/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { ButtonPrimary, Container } from "../../styles/styles";
import { Content, ImgHome, HomeText } from "./styles";
import { FiArrowRight } from "react-icons/fi";

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, My name is
          </p>
          <h1>
            Yukesh Chandran
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="Image of a triangle with spin animation"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Full Stack Developer"],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </h2>

          <div className="button">
            <Link href={"#projects"}>
              <ButtonPrimary>
                <a>
                  <b>Check out my portfolio </b>
                  <FiArrowRight style={{ marginBottom: "-0.3rem" }} size={20} />
                </a>
              </ButtonPrimary>
            </Link>
          </div>
        </HomeText>
        <ImgHome>
          <img className="home-img" src="/home.png" alt="Home Image" />

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dinosaur"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  );
}

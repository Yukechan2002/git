/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Project } from "../../types/Project";
import projects from "../../data/projects";

import ReactPlayer from "react-player";
import { Footer } from "../../components/Footer";
import { AllProjects } from "../../components/Projects/Github";

import * as S from "../../styles/project";
import {
  ButtonAlt,
  ButtonSecondary,
  Title,
  Description,
} from "../../styles/styles";
import {
  ArrowLeft,
  ChatCenteredText,
  Image as IconImage,
  YoutubeLogo,
  Hash,
} from "phosphor-react";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

interface ProjectProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <>
      <Head>
        <title>{project.title} | Evander Inácio</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.imgUrl} />
        <meta property="og:image:secure_url" content={project.imgUrl} />
        <meta name="twitter:image" content={project.imgUrl} />
        <meta name="twitter:image:src" content={project.imgUrl} />
      </Head>

      <S.ProjectContainer>
        <S.Banner>
          <img className="bannerUrl" src={project.banner} alt={project.title} />
          <div className="bannerContainer">
            <div className="bannerContent">
              <img src={project.icon} alt={project.title} />
              <div>
                <h1>{project.title}</h1>
                <p>{project.type}</p>
              </div>
            </div>

            <div className="link">
              <Link href={project.web}>
                <a target="_blank">
                  <ButtonAlt>
                    Live Project <BsGlobe size={15} />
                  </ButtonAlt>
                </a>
              </Link>
              <Link href={project.github}>
                <a target="_blank">
                  <ButtonAlt>
                    Repository <FaGithub size={17} />
                  </ButtonAlt>
                </a>
              </Link>
            </div>
          </div>
        </S.Banner>

        <S.DescriptionProject>
          <div className="description">
            <Title>
              Description
              <span>
                <ChatCenteredText /> Description
              </span>
            </Title>
            <p>{project.description}</p>
          </div>
        </S.DescriptionProject>

        <S.Tags>
          <Title>
            Tags
            <span>
              <Hash /> Skills
            </span>
          </Title>

          <Description style={{ textAlign: "center" }}>
            Technologies used in the project development.
          </Description>

          <S.TagsContainer>
            {project.tags &&
              project.tags.map((tag) => {
                return (
                  <S.TagsContent key={tag.id} color={tag.color}>
                    <div
                      className="card-icon"
                      style={{
                        backgroundColor: `rgba(${tag.rgb}, .1)`,
                        border: `1px solid ${tag.color}`,
                      }}
                    >
                      <Image
                        src={tag.icon}
                        alt={tag.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3>{tag.name}</h3>
                  </S.TagsContent>
                );
              })}
          </S.TagsContainer>
        </S.Tags>

        <S.PrintContainer>
          <Title>
            Screenshot
            <span>
              <IconImage /> Screen
            </span>
          </Title>

          <S.PrintContent>
            <S.Gif>
              <h2>Details</h2>
              <p>
                Name: <span>{project.title}</span>
              </p>
              <p>
                Status: <span>{project.status}</span>
              </p>
              <p>
                Year: <span>{project.year}</span>
              </p>
              <h5>Preview</h5>
              <video className="preview" loop autoPlay muted playsInline>
                <source src={project.gif} />
              </video>
            </S.Gif>

            <S.Print>
              {project.print &&
                project.print.map((print) => {
                  return (
                    <div className="print-list" key={print.id}>
                      <h3>{print.name}</h3>
                      <p>{print.description}</p>
                      <Image
                        width={770}
                        height={460}
                        src={print.img}
                        alt={print.name}
                      />
                    </div>
                  );
                })}
            </S.Print>
          </S.PrintContent>
        </S.PrintContainer>

        <S.ContainerVideo>
          <div className="imageVideo">
            <img src={project.backgroundImage} alt={project.title} />
          </div>
          <Title className="title-video">
            Video
            <span>
              <YoutubeLogo /> Video
            </span>
            <img
              className="vector"
              src="/vectors/youtube.svg"
              alt="YouTube logo"
            />
          </Title>
          <S.Video>
            <ReactPlayer
              url={project.video}
              width="100%"
              height="100%"
              controls={true}
              pip
              config={{ file: { forceHLS: true } }}
            />
          </S.Video>
        </S.ContainerVideo>

        <div className="allProjects">
          <AllProjects title={"See other projects"} />
        </div>
        <Link href={"/#projects"}>
          <ButtonSecondary>
            <a>
              <ArrowLeft
                style={{ marginBottom: "-0.2rem" }}
                weight="bold"
                size={18}
              />{" "}
              Back
            </a>
          </ButtonSecondary>
        </Link>
      </S.ProjectContainer>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const project = projects.find((project) => project.url === params.id);

  return {
    props: {
      project,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.url },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

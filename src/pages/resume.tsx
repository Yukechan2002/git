import Head from "next/head";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { CV } from "../components/CV";
import { Description, Section, Title } from "../styles/styles";
import { PageSection } from "../styles/resume";
import { BsFileText } from "react-icons/bs";

export default function Resume() {
  const resumeData =
    "https://www.canva.com/design/DAGK3J08ZWg/O_ij5KyhUXeWHaz5HHldlw/edit?utm_content=DAGK3J08ZWg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf("/") + 1
  )}view?embed`;

  return (
    <>
      <Head>
        <title>Resume | Yukesh Chandran </title>
        <meta
          name="description"
          content="Here you can view or download my resume."
        />
        <meta property="og:title" content="Resume | Yukesh Chandran" />
        <meta
          property="og:description"
          content="Here you can view or download my resume."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../curriculum</p>
          Resume
          <span>
            <BsFileText /> Curriculum
          </span>
        </Title>
        <Description>Here you can view or download my resume.</Description>

        <PageSection>
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Yukesh Chandran"
          />

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  );
}

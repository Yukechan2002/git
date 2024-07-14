import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const meta = {
  title: "Yukesh Chandran - Full Stack Developer",
  description:
    "Full Stack Developer. Specializing in creating interfaces and functionalities for web applications using React.js.",
  image: "#",
};

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Yukesh Chandran" />
          <meta name="description" content={meta.description} />
          <meta itemProp="name" content={meta.title} />
          <meta itemProp="description" content={meta.description} />
          <meta itemProp="image" content={meta.image} />
          <meta
            name="keywords"
            content="Yukesh, Yukesh Chandran, developer, website, programmer, front-end, back-end,personal website, developer, portfolio, websites, web, São Paulo, SP, JavaScript, ReactJS, NodeJS, software, applications, Freelancer, portfolio developer, e-commerce, Yukesh portfolio"
          />

          <meta name="theme-color" content="#00d9ff" />
          <meta name="copyright" content="Yukesh Chandran 2024" />
          <meta httpEquiv="content-language" content="en" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="cache-control" content="no-cache" />
          <meta httpEquiv="pragma" content="no-cache" />
          <meta name="language" content="en" />
          <meta name="rating" content="general" />
          <link rel="canonical" href="#" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta property="og:url" content="#" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Yukesh Chandran" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />

          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />

          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

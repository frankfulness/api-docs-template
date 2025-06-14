import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

import logo from "../content/img/icon.png";
import Image from "next/image";
import { Footer } from "../components/Footer";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={
      <>
        <Image
          width={36}
          height={36}
          src={logo.src}
          className="mr-2"
          alt="Logo"
        />
        <b className="text-3xl">Valiant</b>
      </>
    }
    projectLink="https://github.com/frankfulness/qr"
    // ... Your additional navbar options
  />
);

// @ts-expect-error 123123213
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
      className="dark"
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          darkMode={true}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/frankfulness/api-docs-template/tree/master/docs"
          footer={<Footer />}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/docs",
});

export default withNextra({
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  basePath: "/api-docs-template",
  // Always export for static deployment
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
});

import { themes as prismThemes } from "prism-react-renderer";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Offical KB - ThePartner",
  tagline:
    "Discover a wealth of free resources covering everything from finding collaborators and honing business strategies to mastering software development best practices. Immerse yourself in a dynamic community of developers, where knowledge is shared freely, fostering collaboration and collective growth.",
  favicon: "img/tp-logo.png",

  // Set the production url of your site here
  url: "https://heybaldur.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/blog",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "HeyBaldur", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Declare some <meta> tags
      metadata: [
        { name: "partners", content: "developers, find, tired" },
        { name: "blog", content: "cooking, applications, somebodye, else" },
        { name: "developers", content: "applications, find, tired, own" },
        { name: "applications", content: "developers, blog, somebodye, else" },
        { name: "tired", content: "partners, developers, find, own" },
        {
          name: "somebodye",
          content: "partners, developers, applications, own",
        },
        { name: "own", content: "developers, applications, tired, else" },
      ],
      headTags: [
        // Declare a <link> preconnect tag
        {
          tagName: "link",
          attributes: {
            rel: "preconnect",
            href: "https://thepartner.dev",
          },
        },
        // Declare some json-ld structured data
        {
          tagName: "script",
          attributes: {
            type: "application/ld+json",
          },
          innerHTML: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "Meta Open Source",
            url: "https://opensource.fb.com/",
            logo: "https://opensource.fb.com/img/logos/Meta-Open-Source.svg",
          }),
        },
      ],
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "img/tp-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Knowledge Base",
          },
          { to: "/blog", label: "Blog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Find a partner",
                to: "https://thepartner.dev",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/HeyBaldur",
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

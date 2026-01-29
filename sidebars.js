/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Sidebar for Getting Started section
  gettingStartedSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["overview"],
    },
  ],
  // Sidebar for Developer APIs section
  developerApisSidebar: [
    {
      type: "category",
      label: "Developer APIs",
      items: [
        "developer-apis",
        {
          type: "category",
          label: "Data Marketplace API",
          items: require("./docs/datamarketplace-api/sidebar.ts").default,
        },
        {
          type: "category",
          label: "DISP API",
          items: require("./docs/disp-api/sidebar.ts").default,
        },
      ],
    },
  ],
};

module.exports = sidebars;

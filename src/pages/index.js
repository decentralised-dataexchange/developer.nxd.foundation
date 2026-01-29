import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Footer from "@site/src/components/Footer";
import Helmet from "react-helmet";
import Header from "@site/src/components/Header";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enabling trust in the data ecosystem for next-generation data sharing. "
    >
      <Header />
      <Helmet>
        <title>NordXDataspace (NXD)</title>
      </Helmet>
      <Footer />
    </Layout>
  );
}

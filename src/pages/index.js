import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '@site/src/components/Footer';
import Helmet from "react-helmet";
import Card from '@site/src/components/Card';
import Header from '@site/src/components/Header';


const CardList = [
  {
    title: "Data Marketplace APIs",
    link: "/datamarketplace",
    description: (<>
      Get started with dHDSI data marketplace APIs after onboarding to the dHDSI marketplace.
    </>),
  },
  {
    title: "Domain-Specific Services APIs",
    link: "/domain",
    description: (<>
      Get started with dHDSI domain specific service APIs
    </>),
  },
  {
    title: "Data Intermediation Service Provider APIs",
    link: "/dataintermediation",
    description: (<>
      Get started with Data Intermediatoon Service Provider (DISP) APIs (Consents, Data Exchange and Digital Walets)
    </>),
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enabling trust in the data ecosystem for next-generation data sharing. ">
      <Header />
      <Helmet>
        <title>NordXDataspace (NXD)</title>
      </Helmet>
      <div className='container mx-auto flex flex-col mt-4 mb-4'>
        <div className='flex flex-col sm:flex-row mt-4 mb-4 space-y-4 sm:space-y-0 sm:space-x-4'>
          {CardList.map((props, idx) => (
            <div className="w-full sm:w-1/3 flex">
              <Card key={idx} {...props} />
            </div>
          ))}
        </div>
        <div className="p-0 w-full lg:flex">
          <Card title={"Trust Anchor"} link={"https://indy.nxd.foundation"} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

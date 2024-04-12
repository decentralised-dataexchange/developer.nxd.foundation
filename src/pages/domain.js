import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '@site/src/components/Footer';
import Helmet from "react-helmet";
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Domain() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enabling trust in the data ecosystem for next-generation data sharing. ">
      <Helmet>
        <title>NordXDataspace (NXD)</title>
        {/* <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;700&amp;family=Roboto+Mono&amp;display=swap" rel="stylesheet" />
      </Helmet>
      <rapi-doc 
        spec-url = "/openapi/domainSpecific.yaml"
        render-style="view"
        theme="light"
        show-header="false"
        nav-bg-color="#0a065e"
        nav-text-color="#fff"
        primary-color="#0a065e"
        persist-auth="true"
        show-method-in-nav-bar="as-colored-block"
        show-components="true"
        allow-spec-file-download="true"
        show-curl-before-try="true"
        schema-style="table"
        regular-font="Hind"
        font-size="large"
        mono-font="Roboto Mono"
        schema-expand-level="1"
        default-schema-tab="schema"
      > </rapi-doc>
      <BrowserOnly>
        {() => {

          const script = document.createElement("script");
          script.src = 'https://cdn.jsdelivr.net/gh/rapi-doc/RapiDoc@9.3.4/dist/rapidoc.js'; // whatever url you want here
          script.type = 'module'
          script.charset = "utf-8";
          script.crossOrigin = true;
          script.async = false;
          script.onload = function () {
            const rapiDocElement = document.querySelector("rapi-doc");
            // Function to apply the style when the element is available
            const applyStyleToApiInfo = () => {
              const mainContentElement =
                rapiDocElement.shadowRoot.querySelector(".main-content");
              const apiInfoElement =
                rapiDocElement.shadowRoot.querySelector("#api-info");

              if (
                apiInfoElement &&
                mainContentElement
              ) {
                mainContentElement.style.padding = "10px";
                apiInfoElement.style.marginLeft = "1px";
                observer.disconnect(); // Stop observing once style is applied
              }
            };

            // Observe changes in the Shadow DOM
            const observer = new MutationObserver(applyStyleToApiInfo);
            if (rapiDocElement.shadowRoot) {
              observer.observe(rapiDocElement.shadowRoot, {
                childList: true,
                subtree: true,
              });
              applyStyleToApiInfo(); // Try applying the style immediately in case the element is already there
            }
          };
          document.head.appendChild(script);
        }}
      </BrowserOnly>
      <Footer />
    </Layout>
  )
}

import React from "react";
import Link from "@docusaurus/Link";

const ApiCard = ({
  title,
  description,
  linkText,
  link,
  specLink,
  workflows,
}) => {
  return (
    <div className="api-card">
      <h2>{title}</h2>
      <div className="api-card-column">
        <ul>
          <li>
            <strong>Overview:</strong> {description}
          </li>
          <li>
            <strong>APIs:</strong>{" "}
            <Link href={specLink || link}>{linkText}</Link>
          </li>
          {workflows && workflows.length > 0 && (
            <li>
              <strong>Workflows:</strong>
              <div
                style={{
                  display: "inline-flex",
                  gap: "8px",
                  marginLeft: "5px",
                }}
              >
                {workflows.map((wf, idx) => (
                  <span key={idx}>
                    <Link href={wf.link}>{wf.label}</Link>
                    {idx < workflows.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default function ApiCards() {
  const apiCardData = [
    {
      title: "Data Marketplace APIs",
      description:
        "Get started with dHDSI data marketplace APIs after onboarding to the dHDSI marketplace.",
      linkText: "Data Marketplace API Docs",
      link: "/docs/datamarketplace-api/dataspace-backend-api",
      specLink: "/datamarketplace",
      workflows: [
        { label: "Login", link: "/docs/datamarketplace-api/onboard-login" },
        {
          label: "Register",
          link: "/docs/datamarketplace-api/onboard-register",
        },
      ],
    },
    {
      title: "Domain-Specific Services APIs",
      description:
        "Get started with dHDSI domain specific service APIs for seamless integration.",
      linkText: "Domain-Specific Services API Docs",
      link: "https://dataspace.nxd.foundation",
    },
    {
      title: "Data Intermediation Service Provider APIs",
      description:
        "Get started with Data Intermediation Service Provider (DISP) APIs (Consents, Data Exchange and Digital Wallets).",
      linkText: "DISP API Docs",
      link: "/docs/disp-api/disp-api-documentation",
      specLink: "/dataintermediation",
      workflows: [
        {
          label: "Create Data Agreement",
          link: "/docs/disp-api/config-create-agreement",
        },
        {
          label: "Read Data Agreement",
          link: "/docs/disp-api/config-read-agreement",
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {apiCardData.map((card, idx) => (
        <ApiCard key={idx} {...card} />
      ))}
    </div>
  );
}

---
id: overview
title: Overview
hide_title: true
sidebar_label: Overview
slug: /getting-started/
sidebar_id: gettingStartedSidebar
---

# CRANE: dHDSI Data Marketplace Onboarding User Guide

This guide shows how to onboard a Data Source and a Data Using Service to CRANE dHDSI Data Marketplace, how to expose and consume data as part of a health data space.

## 1.0 Introduction

This guide helps organisations (Both **Data Sources (DS)** and **Data Using Services (DUS)**) to onboard to CRANE dHDSI Data Marketplace. It explains what the marketplace is, how trust within the data marketplace works, and what an organisation needs to do in order to publish or consume data services.

### 1.1 What is CRANE dHDSI - Data Marketplace?

A data marketplace serves as a secure digital ecosystem where organisations can publish, discover, and exchange data services under a shared governance framework. Think of it as a sophisticated platform that bridges the gap between data providers and data consumers whilst maintaining the highest standards of security, interoperability, transparency, and regulatory compliance. It acts as a directory service of governed Data Sources within a data ecosystem, for e.g. in Healthcare.

Unlike traditional data-sharing arrangements, a data marketplace provides a structured environment where multiple organisations can participate and enter into bilateral agreements dynamically **in a trusted and governed manner**. Every organisation use standardised protocols, verified identities, and clearly defined terms of engagement. The collaborative marketplace infrastructure reduces friction in data exchange whilst ensuring that all parties operate within agreed-upon governance parameters. The marketplace model fundamentally transforms how organisations approach data sharing, moving from bilateral, ad-hoc arrangements to a scalable, multi-party ecosystem where trust is built into the architecture itself. This shift enables organisations to unlock the value of their data assets whilst maintaining full control over usage conditions and access permissions.

### 1.2 Key Components of the data exchange architecture

CRANE dHDSI provides a trusted framework for data exchange between verified organisations and individuals. The diagram below shows how verified organisations and individuals exchange data in CRANE dHDSI by setting Data Agreements, issuing Data Disclosure Agreements, and using EUDI Wallets, for businesses and individuals, to authorise, delegate, and audit sharing under marketplace governance.

![Data Exchange Framework](/img/onboarding/image24.png)
_Figure 1: Data Exchange Framework adopted in CRANE_

#### 1.2.1 Data Agreement - between individual and organisation

This agreement specifies the precise terms governing how data can be utilised and shared between parties. Often formulated by organisations based on a Data Protection Impact Assessment (DPIA), it creates a clear contractual relationship that protects both data providers and consumers whilst enabling legitimate data flows.

Read more: [https://docs.igrant.io/concepts/data-agreements/](https://docs.igrant.io/concepts/data-agreements/)

#### 1.2.2 Data Disclosure Agreement - between two organisations

Derived from a Data Agreement, the DDA formalises the specific conditions under which data is made available and accessed between organisations. It provides transparency on data characteristics, quality, and permissible use cases before any exchange occurs.

Read more: [https://docs.igrant.io/concepts/data-disclosure-agreements/](https://docs.igrant.io/concepts/data-disclosure-agreements/)

#### 1.2.3 Trust and verification

All ecosystem data transactions leverage eIDAS 2.0-based Business Wallets to provide cryptographic verification of each organisation's identity (via **Legal Person Identification Data (Legal PID or LPID)**). This technical infrastructure ensures that all marketplace participants are who they claim to be, creating a foundation of trust essential for secure data exchange.

### 1.3 Key roles

#### 1.3.1 Marketplace administrator

Oversees the entire ecosystem, managing data service listings, enforcing governance policies, and ensuring regulatory compliance across all marketplace activities.

#### 1.3.2 Organisation administrator

Represents individual participating organisations, publishes data services to the marketplace, and negotiates agreements with other verified organisations to enable data exchange.

## 2.0 Data Marketplace onboarding user guide

**Prerequisite:** Before you can join the Data Marketplace, your organisation must meet one of these conditions:

1. You are already onboarded with a Data Intermediation Service Provider. The DISP provides consent management and digital wallet services.
2. You have implemented equivalent functions (of adopting consent management and digital wallets) that meet the governance requirements.

**Assumption for this guide:** This guide assumes your organisation is onboarded with a DISP. The steps below describe that setup and how to proceed.

### 2.1 Onboarding to the Data Intermediation Service Provider (DISP)

To begin, send an email to **[support@igrant.io](mailto:support@igrant.io)** to request the creation of your business wallet account. Once provisioned, your account will include the following credentials in your organisation's wallet:

- Legal Person Identification Data (Legal PID)
- Wallet Unit Attestation (WUA)

These credentials establish your organisation's verified identity within the ecosystem.

### 2.2 Onboarding to the Data Marketplace

#### 2.2.1 Create an account

Visit **[https://dataspace.nxd.foundation/en/onboarding](https://dataspace.nxd.foundation/en/onboarding)** to register your organisation on the Data Marketplace.

**Step 1:** Enter the organisation administrator's details.

![Provide organisation administrator details](/img/onboarding/image8.png)
_Fig 1: Provide organisation administrator details_

**Step 2:** Enter your organisation's details.

![Provide organisation details](/img/onboarding/image15.png)
_Fig 2: Provide organisation details_

Once both steps are completed, your Data Marketplace account will be created.

![Successful account creation](/img/onboarding/image3.png)
_Fig 3: Successful account creation_

#### 2.2.2 Continue or login later

After account creation, the organisation administrator can either click CONTINUE to proceed with onboarding or log in later to continue.

#### 2.2.3 Connect the business wallet

In the next step, provide the Business Wallet Address obtained from your DISP account.

![Provide business wallet address](/img/onboarding/image27.png)
_Fig 4: Provide business wallet address_

The Business Wallet Address can be copied from the Base Configurations page under Digital Wallet (OpenID4VC) in the DISP portal.

![Base configurations page](/img/onboarding/image12.png)
_Fig 5: Base configurations page_

#### 2.2.4 Verify organisational legitimacy

Once the organisation wallet is connected, the Data Marketplace will redirect to the wallet and request access to your Legal PID to verify the organisation's legitimacy. Click Confirm to approve.

![Verify Legal PID](/img/onboarding/image22.png)
_Fig 6: Verify Legal PID_

The administrator will then be redirected back to the Data Marketplace and shown a preview of the Legal PID.

#### 2.2.5 Accept the Code of Conduct (CoC)

In the next step, the organisation administrator is presented with the Data Marketplace Code of Conduct. Review the document carefully, then click SIGN AND CONTINUE to proceed.

![Review and sign code of conduct](/img/onboarding/image20.jpg)
_Fig 7: Review and sign code of conduct_

Once signed, the organisation is successfully onboarded. The administrator will be redirected to the Getting Started page, where they can upload or update the organisation's logo and cover image.

![Getting started page](/img/onboarding/image44.png)
_Fig 8: Getting started page_

### 2.3 Configuring the business wallet and OAuth 2.0 clients

To enable secure, bi-directional communication between the DISP and the Data Marketplace, the organisation administrator must configure the organisation wallet and OAuth 2.0 clients.

#### 2.3.1 Access developer APIs

Navigate to the Developer APIs page in the Data Marketplace.

![Developer APIs page](/img/onboarding/image7.png)
_Fig 9: Developer APIs page_

#### 2.3.2 Configure organisation wallet

Click CONFIGURE next to Organisation Wallet Configuration.

![Organisation wallet configuration](/img/onboarding/image17.png)
_Fig 10: Organisation wallet configuration_

Provide the following endpoints obtained from your DISP account:

**Credential Offer Endpoint** – found under _Digital Wallet (OpenID4VC)_ → _Base Configuration_ in the DISP portal.

![Digital Wallet (OpenID4VC) page with Credential Offer Endpoint](/img/onboarding/image12.png)
_Fig 11: Digital Wallet (OpenID4VC) page with Credential Offer Endpoint_

**Access Point Endpoint** – found under _Data Marketplace_ → _Base Configuration_ in the DISP portal.

![Base Configurations page with Access Point Endpoint](/img/onboarding/image10.png)
_Fig 12: Base Configurations page with Access Point Endpoint_

#### 2.3.3 Request a Software Statement

Once both endpoints are configured, in the Data Marketplace, click Request Credential to initiate the issuance of a Software Statement to your connected business wallet.

![Developer APIs and Credentials page with 'Request Credential'](/img/onboarding/image13.png)
_Fig 13: Developer APIs and Credentials page with 'Request Credential'_

The Data Marketplace will issue the Software Statement, which can be reviewed and accepted within the DISP portal (found under _Digital Wallet (OpenID4VC)_ → _Wallet Unit (Holder)_).

Click 'Click to get the credential issued' link, followed by Accept or Reject as deemed appropriate.

![Wallet Unit (Holder) page with Software Statement notification](/img/onboarding/image6.png)
_Fig 14: Wallet Unit (Holder) page with Software Statement notification_

#### 2.3.4 Verify the Software Statement

Once accepted, the Software Statement will appear in the Organisation Wallet and can also be viewed from within the Data Marketplace.

#### 2.3.5 Configure OAuth 2.0 client (Data Marketplace → DISP)

Click CONFIGURE next to the Data Marketplace OAuth 2.0 client. Provide a name and optional description for the client, then click CREATE.

![Configure OAuth 2.0 client in Developer APIs and Credentials page](/img/onboarding/image18.png)
_Fig 15: Configure OAuth 2.0 client in Developer APIs and Credentials page_

Copy the generated Client ID and Client Secret using the copy buttons provided.

![Developer APIs and credentials page with new OAuth 2.0 Client](/img/onboarding/image5.png)
_Fig 16: Developer APIs and credentials page with new OAuth 2.0 Client_

In the DISP portal, navigate to _Data Marketplace_ → _Base Configurations_, click CONFIGURE and paste these values. Set the base URL to **[https://demo-api.nxd.foundation/service](https://demo-api.nxd.foundation/service)**. Once all fields are filled in, click Save.

![Configure OAuth 2.0 Client from Data Marketplace](/img/onboarding/image45.png)
_Fig 17: Configure OAuth 2.0 Client from Data Marketplace_

#### 2.3.6 Configure OAuth 2.0 client (DISP → Data Marketplace)

Within your DISP account, create a new OAuth 2.0 client for the Data Marketplace. Provide a name and optional description, then click SAVE.

![Configure OAuth 2.0 Client towards Data Marketplace](/img/onboarding/image9.png)
_Fig 18: Configure OAuth 2.0 Client towards Data Marketplace_

Copy the generated Client ID and Client Secret.

![Base Configurations page with new OAuth 2.0 Client](/img/onboarding/image33.png)
_Fig 19: Base Configurations page with new OAuth 2.0 Client_

Return to the Data Marketplace and configure these under Organisation OAuth 2.0 Client.

![Configure OAuth 2.0 Client from DISP](/img/onboarding/image16.png)
_Fig 20: Configure OAuth 2.0 Client from DISP_

### 2.4 Final verification

Once both clients have been configured, bi-directional communication between the DISP and the Data Marketplace is successfully established. The organisation administrator can now proceed to publish Data Disclosure Agreements from the DISP to the Data Marketplace.

## 3.0 Publishing and governance of DDAs

The Data Source organisation administrator can create Data Disclosure Agreements (DDAs) by linking existing Data Agreements within the Data Intermediation Service Provider (DISP) platform. Once created, these agreements can be published to the connected Data Marketplace.

:::note
Before proceeding with this step, ensure that the prerequisites outlined in Appendix A ("Creating a Data Agreement in iGrant.io DISP") and Appendix B ("Creating a Data Disclosure Agreement in iGrant.io DISP") have been completed in a Data Intermediation Service Provider such as the one provided by iGrant.io.
:::

Upon publication, each DDA appears on the Data Marketplace Dashboard in an unlisted state by default, as illustrated below.

![Unlisted Data Disclosure Agreements on the Marketplace Dashboard](/img/onboarding/image21.png)
_Fig 21: Unlisted Data Disclosure Agreements on the Marketplace Dashboard_

The administrator may then request a review of the DDA to make it available for discovery by Data Using Service Organisations. These organisations will then be able to sign or decline the agreement as part of their onboarding process.

When a review is requested, the Data Marketplace initiates its own governance workflow. A designated Review Committee assesses the DDA for completeness, accuracy, and compliance with marketplace standards. The committee may either approve or reject the agreement should any discrepancies be identified.

![Requesting a Review for a Data Disclosure Agreement](/img/onboarding/image2.png)
_Fig 22: Requesting a Review for a Data Disclosure Agreement_

If the DDA is approved, it appears with an Approved status in the marketplace listings, as shown below.

![Approved Data Disclosure Agreement in Marketplace Listings](/img/onboarding/image11.png)
_Fig 23: Approved Data Disclosure Agreement in Marketplace Listings_

Following approval, the administrator can choose to list the agreement, making it discoverable by other verified organisations.

![Listing an Approved Data Disclosure Agreement](/img/onboarding/image40.png)
_Fig 24: Listing an Approved Data Disclosure Agreement_

Once listed, the DDA becomes visible on the public discovery page, where Data Using Service Organisations can access it for review and signing.

![Data Disclosure Agreement Listed on Public Discovery Page](/img/onboarding/image34.png)
_Fig 25: Data Disclosure Agreement Listed on Public Discovery Page_

## 4.0 Reviewing and signing DDAs

The Data Using Service organisation administrator can explore all available data sources by visiting the public discovery page on the Data Marketplace, as shown below.

![Public Discovery Page Displaying Available Data Sources](/img/onboarding/image30.png)
_Fig 26: Public Discovery Page Displaying Available Data Sources_

To review a published DDA, the administrator selects View Data Disclosure Agreement corresponding to the desired data source.

![Viewing a Data Disclosure Agreement](/img/onboarding/image42.png)
_Fig 27: Viewing a Data Disclosure Agreement_

Within the detailed view, the administrator can access individual DDAs by clicking View Data Disclosure Agreements, as demonstrated below.

![Viewing a single Data Disclosure Agreement](/img/onboarding/image14.png)
_Fig 28: Viewing a single Data Disclosure Agreement_

Furthermore, the administrator can examine the APIs that are made available and protected under each DDA by selecting View APIs.

![Viewing APIs Associated with a Data Disclosure Agreement](/img/onboarding/image36.png)
_Fig 29: Viewing APIs Associated with a Data Disclosure Agreement_

By reviewing the available APIs, the administrator gains insight into how data sets are accessed and can test these interfaces using access tokens issued by the relevant Data Source.

To sign or withdraw from a DDA, the administrator must first log in. Once authenticated, and upon identifying an agreement that matches the organisation's business needs, they can proceed to sign it by clicking Sign with Business.

This action redirects the user to the Business Wallet, where the Data Source requests the Data Using Service to sign the agreement using a Software Statement issued by the Data Marketplace.

![Signing a Data Disclosure Agreement using the Business Wallet](/img/onboarding/image37.png)
_Fig 30: Signing a Data Disclosure Agreement using the Business Wallet_

Upon confirmation, the administrator digitally signs the agreement, and the signed copy is transmitted back to the Data Source. Optionally, the user may then be redirected to the Data Marketplace dashboard.

The Signed Agreements page in the Data Marketplace provides a complete audit trail of all agreements the organisation has signed, ensuring full transparency and traceability.

![Viewing Signed Agreements and Audit Trail](/img/onboarding/image1.png)
_Fig 31: Viewing Signed Agreements and Audit Trail_

After successfully signing a DDA, the Data Using Service can begin retrieving data via the DISP, accessing the relevant datasets and APIs specified in the agreement.

## References

1. European Commission (2024) eIDAS 2.0 Regulation – Regulation (EU) 2024/1183 of the European Parliament and of the Council on digital identity and trust services. Official Journal of the European Union.
2. [Data Agreements](https://docs.igrant.io/concepts/data-agreements/)
3. [Data Disclosure Agreements](https://docs.igrant.io/concepts/data-disclosure-agreements/)
4. IEEE (2023) [Data Exchange Agreement Framework for Trusted Data Sharing Ecosystems](https://ieeexplore.ieee.org/document/10275546). IEEE Access.
5. European Commission (2022) European Health Data Space (EHDS) Proposal – COM(2022) 197 final. Brussels.
6. CRANE Project (2024) Decentralised Health Data Space Infrastructure (dHDSI) Technical Overview. Internal Project Documentation.
7. Internet Engineering Task Force (IETF) (2012) [The OAuth 2.0 Authorization Framework (RFC 6749)](https://datatracker.ietf.org/doc/html/rfc6749).
8. [OpenID for Verifiable Credential Issuance (OpenID4VCI) v1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html).
9. [OpenID for Verifiable Presentations (OpenID4VP) v1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html).

## Appendix A: Data Exchange Agreements

### A.1 Creating a Data Agreement in iGrant.io DISP

To publish a Data Disclosure Agreement (DDA) on the Data Marketplace, a Data Agreement (DA) must be created first. This defines the data-sharing relationship between an individual and an organisation. Once completed, a DDA can be derived from the DA to define data exchange between two organisations.

#### A.1.1 Define Usage Purpose, Description, and Data Exchange Type

Navigate to the Data Agreements page and click the Add (+) button to create a new agreement. Provide the Usage Purpose, Description, and **set Data Exchange to Data Source.** It means that the data is being used externally by third party providers.

![Creating a new Data Agreement with usage purpose, description, and data exchange type](/img/onboarding/image32.png)
_Fig A1: Creating a new Data Agreement with usage purpose, description, and data exchange type._

#### A.1.2 Specify Lawful Basis and Configure the Data Policy

Select the Lawful Basis applicable to the processing activity. In this example (Figure A.2), consent is required from the individual. Set Third-party Data Sharing to True to enable creation of a DDA based on this agreement.

![Configuring lawful basis and data policy for a Data Agreement](/img/onboarding/image28.png)
_Fig A2: Configuring lawful basis and data policy for a Data Agreement._

#### A.1.3 Add Dataset and OpenAPI Specification

Define the dataset by listing the data elements to be shared, allowing individuals to make informed decisions. In Figure A.3, two dataset entries are shown, each with a name and description. Next, provide an OpenAPI Specification, which outlines the APIs that Data Using Services will be able to access after signing a DDA linked to this DA.

![Adding dataset fields and OpenAPI specification to a Data Agreement](/img/onboarding/image41.png)
_Fig A3: Adding dataset fields and OpenAPI specification to a Data Agreement_

#### A.1.4 Save the Data Agreement

Click Save to store the draft. The agreement will appear in draft form and can be modified prior to publication. An unpublished Data Agreement is not yet available to individuals, and a DDA cannot be derived from it.

![Data Agreements page displaying a newly created draft](/img/onboarding/image31.png)
_Fig A4: Data Agreements page displaying a newly created draft._

#### A.1.5 Publish the Data Agreement

Click Publish and follow the instructions to make the agreement available to individuals to create the DDA. Publishing can be performed during creation as well.

![Data Agreements page displaying a published Data Agreement](/img/onboarding/image29.png)
_Fig A5: Data Agreements page displaying a published Data Agreement._

### A.2 Creating a Data Disclosure Agreement from a Data Agreement

Once a Data Agreement has been published, a Data Disclosure Agreement (DDA) can be created. The DDA governs data exchange between two verified organisations.

#### A.2.1 Connect a Data Agreement

Navigate to Data Marketplace → Data Disclosure Agreements and click the Add (+) button. Under Connected Data Agreement, select the previously created DA to pre-fill relevant values. For Presentation Definition, choose To opt-in or out of DDA using Software Statement, requiring the Data Using Service to sign the agreement with a Software Statement issued by the Data Marketplace.

![Connecting a Data Agreement to a new Data Disclosure Agreement](/img/onboarding/image43.png)
_Fig A6: Connecting a Data Agreement to a new Data Disclosure Agreement._

#### A.2.2 Configure the Data Disclosure Agreement

Enter the Policy URL of the Data Controller and adjust other configurations as necessary.

![Configuring the Data Disclosure Agreement](/img/onboarding/image39.png)
_Fig A.7: Configuring the Data Disclosure Agreement._

#### A.2.3 Save the Data Disclosure Agreement

Click Save to store the draft version. The DDA can be edited before publication; however, it will not appear in the Data Marketplace until published.

![Data Disclosure Agreements page showing an unpublished DDA](/img/onboarding/image35.png)
_Fig A8: Data Disclosure Agreements page showing an unpublished DDA._

#### A.2.4 Publish the Data Disclosure Agreement

Click Publish and follow the prompts to make the agreement available to the Data Marketplace. Subsequent approval and listing are managed by marketplace governance, after which the DDA becomes discoverable and signable by Data Using Services.

![Data Disclosure Agreements page showing a published DDA](/img/onboarding/image19.png)
_Fig A9: Data Disclosure Agreements page showing a published DDA_

## Appendix B: Integrating the Consent Management SDK into Mobile Applications

To enable mobile applications to participate seamlessly in the CRANE dHDSI ecosystem, organisations may integrate iGrant.io SDKs that support both data wallet and consent management functionalities. These SDKs allow applications to record consents via a privacy dashboard and manage digital credentials, and facilitate consent-based data sharing in alignment with Data Agreements and Data Disclosure Agreements configured in the Data Intermediation Service Provider (DISP).

### B.1 Consent Management SDK (Privacy Dashboard)

The Consent Management SDK enables developers to integrate the Privacy Dashboard into mobile applications, providing end-users with a transparent interface to view, manage, and update their consent preferences in real-time.

Key functions include:

- Displaying data agreements and consent policies.
- Update consent status
- Listening for consent status changes.
- Supporting localisation.
- Manage individuals

Comprehensive integration steps for Android and iOS are provided at: [https://docs.igrant.io/docs/consent-management-sdks/](https://docs.igrant.io/docs/consent-management-sdks/)

### B.2 Data Wallet (UI) SDK

The Data Wallet (UI) SDK enables Android and iOS applications to embed wallet capabilities for managing verifiable credentials and establishing connections with issuer or verifier organisations.

Key functions include:

- Initialising and displaying the wallet user interface.
- Managing verifiable credentials and connections.
- Handling deep links and notifications for credential issuance and verification.
- Enabling secure backup and restore via iGrant.io Data Pods.

Detailed implementation guidance and API references are available at: [https://docs.igrant.io/docs/data-wallet-sdks/](https://docs.igrant.io/docs/data-wallet-sdks/)

## Appendix C: Securing Data Access through Authorised API Integration

Once a Data Disclosure Agreement (DDA) has been successfully signed by both the Data Source (DS) and the Data Using Service (DUS), the DUS may begin integrating the APIs exposed by the DS into its own systems or applications. These APIs enable authorised retrieval of data in accordance with the permissions defined in the underlying Data Agreement (DA) and the corresponding DDA.

### C.1 Validating Tokens and Authorising Requests

As a Data Source, every incoming API request from a Data Using Service must undergo token validation and authorisation before any data is shared.

The validation process ensures that:

- The request originates from a verified and authorised Data Using Service.
- The access token presented is valid, unexpired, and issued under a signed DDA.
- The requested API endpoint and HTTP method are explicitly permitted under the associated Data Agreement linked to that DDA.

This is achieved by invoking the Token Verification and Authorisation Endpoint provided by the Data Source's Data Intermediation Service Provider (DISP).

#### C.1.1 Typical Validation Flow

1. **Receive API Request**: The Data Source's resource server receives a request containing an Access Token issued by the Data Marketplace under a valid DDA.
   The Data Using Service can obtain the access token as described here:
   [https://docs.igrant.io/docs/datamarketplace-individual-api/pull-data-endpoint](https://docs.igrant.io/docs/datamarketplace-individual-api/pull-data-endpoint)

2. **Forward Token for Verification**: The resource server calls the DISP's Authorisation Endpoint to validate the token and extract the associated claims:
   [https://docs.igrant.io/docs/datamarketplace-individual-api/token-verification-and-authorisation](https://docs.igrant.io/docs/datamarketplace-individual-api/token-verification-and-authorisation)

3. **Verify Scope and Agreement Context**: The DISP verifies that:
   - The token was issued to the requesting DUS.
   - The token is bound to the specific Data Agreement and DDA.
   - The requested API path and HTTP method match those authorised within the Data Agreement.

4. **Grant or Deny Access**
   - If all checks pass, the DISP confirms authorisation and the resource server processes the request.
   - If any check fails — for example, the token has expired, the endpoint is incorrect, or the DDA is unauthorised — the DISP returns an error and access must be denied.

This validation mechanism ensures that only authorised organisations, operating under active and signed DDAs, can programmatically access data through the APIs exposed by the Data Source.

### C.2 Recommended Practices for Data Sources

To maintain compliance and ensure robust protection of APIs, Data Sources should:

- **Implement fine-grained access control:** Ensure that authorisation checks are performed per endpoint and per method.
- **Enforce TLS and mutual authentication:** Always secure communication channels using HTTPS and validated certificates.
- **Regularly rotate API credentials and keys:** Maintain security hygiene and minimise risk exposure.

## Appendix D: Developer Resources and Open Source Repositories

To assist developers in integrating with the CRANE dHDSI ecosystem, the following technical documentation and open-source reference implementations are provided. These resources cover SDK integration, API specifications, and practical examples for both Data Sources and Data Using Services.

### D.1 Official Technical Documentation

**Data Wallet SDK (Android and iOS):** Detailed guides for embedding wallet capabilities into mobile applications, enabling the management of verifiable credentials and connections.

- Link: [https://docs.igrant.io/docs/data-wallet-sdks/](https://docs.igrant.io/docs/data-wallet-sdks/)

**Consent Management SDK (Android and iOS):** Documentation for integrating the Privacy Dashboard into mobile applications to capture and manage user consents in compliance with data agreements.

- Link: [https://docs.igrant.io/docs/consent-management-sdks/](https://docs.igrant.io/docs/consent-management-sdks/)

**REST API Documentation:** Comprehensive reference for the developer APIs used to interact with the Data Marketplace and DISP services.

- Link: [https://docs.igrant.io/docs/developer-apis](https://docs.igrant.io/docs/developer-apis)

### D.2 Open Source Reference Implementations

**Data4Diabetes Resource Server:** A reference implementation for Data Source organisations. This repository demonstrates how to set up a Resource Server (API) that is protected using the Authorisation Server provided by the Data Intermediation Service Provider (DISP), as described in Appendix C.

- Link: [https://github.com/decentralised-dataexchange/data4diabetes-resource-server](https://github.com/decentralised-dataexchange/data4diabetes-resource-server)

**Data4Diabetes Mobile App (Flutter):** A reference mobile application built using Flutter. This project demonstrates the practical integration of both the Data Wallet and Consent Management SDKs for Android and iOS, serving as a template for developers building user-facing health data applications.

- Link: [https://github.com/decentralised-dataexchange/data4diabetes-app](https://github.com/decentralised-dataexchange/data4diabetes-app)

## Need Help?

Our support team is ready to assist you at every step:

- **Email**: [support@nxd.foundation](mailto:support@nxd.foundation)
- **GitHub Issues**: Report bugs or suggest improvements by creating an issue on our [GitHub repository](https://github.com/decentralised-dataexchange).

Your feedback drives our continuous improvement. Welcome to NordXDataspace!

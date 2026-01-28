import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [

    {
      type: "category",
      label: "Data Agreement",
      link: {
        type: "generated-index",
        title: "Data Agreement",
        slug: "/category/disp-api/data-agreement",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/config-create-agreement",
          label: "Create data agreement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/config-read-agreement",
          label: "Read data agreement",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/config-update-agreement",
          label: "Update data agreement",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/config-delete-agreement",
          label: "Delete data agreement",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "disp-api/config-list-agreement",
          label: "List all data agreements",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/config-list-agreement-revisions",
          label: "List data agreement revisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-agreement-list",
          label: "List all active data agreements",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-agreement-read",
          label: "Read data agreement (2)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-agreement-data-read",
          label: "List data attributes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data Attribute",
      link: {
        type: "generated-index",
        title: "Data Attribute",
        slug: "/category/disp-api/data-attribute",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/config-list-data-attribute",
          label: "Read data attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/config-update-data-attribute",
          label: "Update data attribute",
          className: "api-method put",
        },
        
      ],
    },
    {
      type: "category",
      label: "Data Policy",
      link: {
        type: "generated-index",
        title: "Data Policy",
        slug: "/category/disp-api/data-policy",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/config-create-policy",
          label: "Create data policy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/config-read-policy",
          label: "Read data policy",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/config-update-policy",
          label: "Update data policy",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/config-delete-policy",
          label: "Delete data policy",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "disp-api/config-list-policy",
          label: "List all data policies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/config-list-policy-revisions",
          label: "List data policy revisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-policy-read",
          label: "Read data policy (2)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Individual",
      link: {
        type: "generated-index",
        title: "Individual",
        slug: "/category/disp-api/individual",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/config-create-individual",
          label: "Create individual",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/config-read-individual",
          label: "Read individual",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/config-update-individual",
          label: "Update individual",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/config-list-individuals",
          label: "List all individuals",
          className: "api-method get",
        },
        
        
        
        {
          type: "doc",
          id: "disp-api/service-list-individuals",
          label: "List all individuals (2)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Audit",
      link: {
        type: "generated-index",
        title: "Audit",
        slug: "/category/disp-api/audit",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/audit-data-agreement-records-list",
          label: "Fetch all consent records",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/audit-consent-record-read",
          label: "Get consent record",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/audit-data-agreement-list",
          label: "Fetch all data agreements",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/audit-read-record",
          label: "Get data agreement",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Webhook",
      link: {
        type: "generated-index",
        title: "Webhook",
        slug: "/category/disp-api/webhook",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/config-create-webhook",
          label: "Create webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/config-read-webhook",
          label: "Read webhook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/config-update-webhook",
          label: "Update webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/config-delete-webhook",
          label: "Delete webhook",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "disp-api/config-list-webhooks",
          label: "List all webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/config-read-webhook-event-types",
          label: "Read webhook event types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/get-webhook-payload-content-types-yaml",
          label: "List all webhook content types",
          className: "api-method get",
        },
        
        
        
        
        
        
        
      ],
    },
    {
      type: "category",
      label: "Organisation",
      link: {
        type: "generated-index",
        title: "Organisation",
        slug: "/category/disp-api/organisation",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/service-read-organisation-cover-image",
          label: "Read organisation cover image",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-read-organisation-logo-image",
          label: "Read organisation logo image",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-read-organisation",
          label: "Read organisation (2)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-read-organisation-image",
          label: "Read organisation image",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Identity Provider",
      link: {
        type: "generated-index",
        title: "Identity Provider",
        slug: "/category/disp-api/identity-provider",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/service-read-idp",
          label: "Read IdP details",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Verification",
      link: {
        type: "generated-index",
        title: "Verification",
        slug: "/category/disp-api/verification",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/service-verification-agreement-list",
          label: "List all data agreements (2)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-verification-agreement-consent-record-read",
          label: "Read latest consent record",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-verification-consent-record-list",
          label: "List all consent records",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Consent Record",
      link: {
        type: "generated-index",
        title: "Consent Record",
        slug: "/category/disp-api/consent-record",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/service-create-individual-consent-record",
          label: "Create consent record",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/service-read-individual-record-read",
          label: "Read consent record",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-create-individual-consent-record-draft",
          label: "Create draft consent record",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/service-create-individual-consent-record-and-signature",
          label: "Create consent record and signature",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/service-list-individual-consent-record-list",
          label: "List all consent records for individual",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-delete-all-records",
          label: "Delete all consent records",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "disp-api/service-update-individual-consent-record",
          label: "Update consent record",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/service-create-individual-consent-record-signature",
          label: "Creates blank signature",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/service-update-individual-consent-record-signature",
          label: "Update consent record signature",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/service-list-individual-agreement-consent-record-list",
          label: "List all consent records (2)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/service-list-data-agreement-record-history",
          label: "List consent record history",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data Sharing",
      link: {
        type: "generated-index",
        title: "Data Sharing",
        slug: "/category/disp-api/data-sharing",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/service-read-data-sharing-ui",
          label: "Read data sharing UI",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Base Configurations",
      link: {
        type: "generated-index",
        title: "Base Configurations",
        slug: "/category/disp-api/base-configurations",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/create-base-configurations",
          label: "Create Base Configurations",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/read-base-configurations",
          label: "Read Base Configurations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/update-base-configurations",
          label: "Update Base Configurations",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/delete-base-configurations",
          label: "Delete Base Configurations",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "disp-api/read-access-point-configuration",
          label: "Read Access Point Configuration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/create-o-auth-2-0-client",
          label: "Create OAuth2.0 Client",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/read-o-auth-2-0-client",
          label: "Read OAuth2.0 Client",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/update-o-auth-2-0-client",
          label: "Update OAuth2.0 Client",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/delete-o-auth-2-0-client",
          label: "Delete OAuth2.0 Client",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "disp-api/list-o-auth-2-0-clients",
          label: "List OAuth2.0 Clients",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data Disclosure Agreements",
      link: {
        type: "generated-index",
        title: "Data Disclosure Agreements",
        slug: "/category/disp-api/data-disclosure-agreements",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/list-all-data-disclosure-agreement-records",
          label: "List all Data Disclosure Agreement Records",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/list-opted-in-individuals",
          label: "List Opted-In Individuals",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/get-individual-is-opted-in",
          label: "Get Individual is Opted-In",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/create-data-disclosure-agreement-template",
          label: "Create Data Disclosure Agreement Template",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/read-data-disclosure-agreement-template",
          label: "Read Data Disclosure Agreement Template",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/update-data-disclosure-agreement-template",
          label: "Update Data Disclosure Agreement Template",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "disp-api/delete-data-disclosure-agreement-template",
          label: "Delete Data Disclosure Agreement Template",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "disp-api/list-data-disclosure-agreement-templates",
          label: "List Data Disclosure Agreement Templates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/read-data-disclosure-agreement-template-revision",
          label: "Read Data Disclosure Agreement Template Revision",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/list-data-disclosure-agreement-template-revisions",
          label: "List Data Disclosure Agreement Template Revisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/read-data-disclosure-agreement-record",
          label: "Read Data Disclosure Agreement Record",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/read-data-disclosure-agreement-record-revision",
          label: "Read Data Disclosure Agreement Record Revision",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/list-data-disclosure-agreement-record-revisions",
          label: "List Data Disclosure Agreement Record Revisions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/list-all-revisions-for-all-data-disclosure-agreement-records",
          label: "List all revisions for all Data Disclosure Agreement Records",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Signed Agreements",
      link: {
        type: "generated-index",
        title: "Signed Agreements",
        slug: "/category/disp-api/signed-agreements",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/pull-data-endpoint",
          label: "Pull Data Endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "disp-api/read-pull-data-record",
          label: "Read Pull Data Record",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/list-pull-data-records",
          label: "List Pull Data Records",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Authorisation Server",
      link: {
        type: "generated-index",
        title: "Authorisation Server",
        slug: "/category/disp-api/authorisation-server",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/access-point-configurations",
          label: "Access Point Configurations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/authorisation-server-metadata",
          label: "Authorisation Server Metadata",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/token-verification-and-authorisation",
          label: "Token Verification and Authorisation",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Access Logs",
      link: {
        type: "generated-index",
        title: "Access Logs",
        slug: "/category/disp-api/access-logs",
      },
      items: [
        {
          type: "doc",
          id: "disp-api/read-validate-access-record",
          label: "Read Validate Access Record",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "disp-api/list-validate-access-records",
          label: "List Validate Access Records",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data Disclosure Agreement Records",
      link: {
        type: "generated-index",
        title: "Data Disclosure Agreement Records",
        slug: "/category/disp-api/data-disclosure-agreement-records",
      },
      items: [
        
      ],
    },
    {
      type: "category",
      label: "Data Marketplace",
      link: {
        type: "generated-index",
        title: "Data Marketplace",
        slug: "/category/disp-api/data-marketplace",
      },
      items: [
        
      ],
    },
  ],
};

export default sidebar.apisidebar;

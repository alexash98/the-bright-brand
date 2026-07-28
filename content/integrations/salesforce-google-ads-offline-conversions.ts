import type { IntegrationGuide } from "@/content/integrations/types";

const guide: IntegrationGuide = {
  "slug": "salesforce-google-ads-offline-conversions",
  "name": "Salesforce to Google Ads offline conversions",
  "metaTitle": "Salesforce Google Ads Offline Conversions",
  "metaDescription": "Map Salesforce Leads, Contacts and Opportunities to Google Ads offline conversions with GCLID fields, stage triggers and deduplication.",
  "intro": "Carry Google click identifiers from Lead through Contact and Opportunity so Salesforce stage changes can upload valued conversions into Google Ads.",
  "unverifiedUiNotes": [
    "Google Ads conversion import menus move between Goals and Tools experiences. Configure offline click conversion actions wherever your account surfaces conversion settings.",
    "Salesforce Setup paths differ between Lightning and Classic and by edition. Locate objects and fields via Object Manager when menu labels differ."
  ],
  "sections": [
    {
      "heading": "What this integration solves",
      "body": "Salesforce-heavy sales teams often lose gclid at Lead Convert. Without a field mapping plan, Google Ads only sees web conversions and never learns from Opportunity Closed Won. Budgets then chase MQL volume that sales discounts.\n\nThis guide keeps GCLID__c (or your agreed API name) from Web-to-Lead or form middleware onto Contact, mirrors it to Opportunity when needed, and uploads on StageName transitions you choose."
    },
    {
      "heading": "Prerequisites and permissions",
      "body": "Salesforce System Administrator access to create custom fields on Lead, Contact and Opportunity. Google Ads access to create offline click conversion actions. A middleware option: Salesforce Flow calling an invocable Apex/HTTP callout, MuleSoft, or n8n listening to Opportunity Change Data Capture.\n\nCreate custom fields: GCLID__c Text(255), GBRAID__c, WBRAID__c, Google_Click_Date__c (DateTime), Offline_Conversion_Uploaded__c (Checkbox). Ensure Lead mapping copies GCLID__c to Contact on convert."
    },
    {
      "heading": "The build, step by step",
      "body": "1. Capture identifiers on the landing experience into Lead fields via Web-to-Lead hidden fields or form handler.\n\n2. Map Lead to Contact on convert. Test convert with a sample Lead so GCLID__c survives.\n\n3. When an Opportunity is created from Contact, copy GCLID__c onto a Opportunity.GCLID__c field if your upload job reads Opportunities.\n\n4. Create Google Ads conversion actions aligned to StageName values, for example SF Opportunity Qualified and SF Closed Won.\n\n5. Flow criteria: StageName equals target, Offline_Conversion_Uploaded__c is false, GCLID__c is not blank. Callout payload includes conversion_date_time from LastStageChangeDate or NOW(), value from Amount, currency from CurrencyIsoCode.\n\n6. On success, set Offline_Conversion_Uploaded__c true and stamp Offline_Conversion_Upload_Log__c."
    },
    {
      "heading": "Gotchas",
      "body": "Lead Convert field mapping is the number one silent failure. Person Accounts change where fields live. Multi-currency orgs must convert Amount into the Ads account currency. Partial sandbox tests do not prove production callout auth. Opportunity StageName picklist API values, not labels, should drive Flow conditions. Reopened Closed Lost opportunities need a reset policy for the uploaded checkbox."
    },
    {
      "heading": "How to verify it is working",
      "body": "Run a named test Opportunity through StageName changes in a full sandbox with callouts enabled, then in production with a low-value test action first. Confirm Google Ads upload acceptance and Salesforce field stamps. Compare campaign ID from the original click using Google Ads click reports where available."
    },
    {
      "heading": "What breaks it later",
      "body": "Deployments that omit field mappings, Connected App secret rotation, StageName renames, and duplicate Management of Opportunities after account merges. Add a weekly report: Opportunities in Closed Won with blank GCLID__c or uploaded false."
    },
    {
      "heading": "Identity and capture for Salesforce to Google Ads offline conversions",
      "body": "Salesforce identity fails at Lead Convert more than at the HTTP callout. Prove GCLID__c survives convert onto Contact, then onto Opportunity.GCLID__c on every creation path (Contact, Account, CPQ). Person Accounts change field residency. Document the live API names beside a sample payload and block blank overwrites on merge."
    },
    {
      "heading": "Upload contract for Salesforce to Google Ads offline conversions",
      "body": "One Google Ads action per StageName API value you monetise (qualified and Closed Won at minimum). Payload uses LastStageChangeDate or NOW(), Amount converted into Ads account currency, CurrencyIsoCode, and an order_id that survives Flow retries. Gate on Offline_Conversion_Uploaded__c false and non-blank GCLID__c. Stamp success fields only after Ads accepts the hit."
    },
    {
      "heading": "Monitoring for Salesforce to Google Ads offline conversions",
      "body": "Weekly report Closed Won Opportunities with blank GCLID__c or uploaded false. Watch Connected App auth failures and StageName picklist deploys. After any Lead or Contact field-mapping change, re-run a convert canary with a distinctive GCLID__c string the same day. A named measurement owner owns the Flow; deploy pipelines do not."
    },
    {
      "heading": "Deep dive: Salesforce to Google Ads offline conversions",
      "body": "Store StageName API values in Custom Metadata so label renames cannot break uploads. Use a Named Credential with a least-privilege integration user that only updates offline stamp fields. Partial sandboxes lie about Connected App behaviour; keep a production canary action finance ignores. Reopened Closed Lost records need an explicit reset policy for the uploaded checkbox."
    },
    {
      "heading": "Operator checklist: salesforce-google-ads-offline-conversions",
      "body": "1) Web-to-Lead or form writes GCLID__c. 2) Convert test proves Contact.GCLID__c. 3) Opportunity creation copies the ID. 4) Flow fires on StageName API value. 5) Ads shows Accepted within 72 hours. 6) Offline_Conversion_Uploaded__c flips. 7) Re-test after the next Lead mapping deploy."
    }
  ],
  "faqs": [
    {
      "q": "Do we put GCLID on the Account object?",
      "a": "Avoid it as the only store. Clicks belong to people. Account-level fields make multi-contact opportunities ambiguous."
    },
    {
      "q": "Can Marketing Cloud Journeys fire the upload instead of Flow?",
      "a": "They can, but Opportunity StageName authenticity is usually cleaner inside Salesforce Flow close to the record change."
    },
    {
      "q": "What about Salesforce Opportunities created without Leads?",
      "a": "Then capture GCLID on Contact via the website form sync and copy it at Opportunity creation. Skip Lead mapping, but do not skip the Contact field."
    },
    {
      "q": "How should we treat Amount zero Opportunities?",
      "a": "Do not upload zero as if it were revenue. Either block the Flow or upload a separately agreed expected value field."
    },
    {
      "q": "Is Google native Salesforce data manager a substitute for Flow?",
      "a": "Native connectors help some orgs. Many still need a custom Flow because stage definitions and value rules are company-specific."
    }
  ],
  "relatedLinks": [
    {
      "href": "/services/crm-implementation",
      "title": "CRM implementation",
      "description": "Salesforce builds that protect attribution fields."
    },
    {
      "href": "/industries/b2b-saas-and-platforms",
      "title": "B2B SaaS and consultants marketing",
      "description": "Long Salesforce cycles and offline revenue."
    },
    {
      "href": "/integrations/hubspot-google-ads-offline-conversions",
      "title": "HubSpot offline conversions guide",
      "description": "Parallel pattern in HubSpot."
    },
    {
      "href": "/integrations/crm-migration-without-losing-attribution",
      "title": "CRM migration without losing attribution",
      "description": "Keep click IDs when you move platforms."
    }
  ]
};

export default guide;

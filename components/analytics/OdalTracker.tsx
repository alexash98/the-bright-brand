import Script from "next/script";

// Live Framer site loads Odal with these exact attributes. Preserve them
// verbatim so form/ingest tracking continues after cutover.
export const ODAL_WORKSPACE_ID = "25f28148-c6fb-454d-8b84-8355f53a0dfa";
export const ODAL_API_URL = "https://odal.io/api/ingest/form";
export const ODAL_SCRIPT_SRC = "https://odal.io/tracker.js";

export function OdalTracker(): React.ReactElement {
  return (
    <Script
      id="odal-tracker"
      src={ODAL_SCRIPT_SRC}
      strategy="afterInteractive"
      data-workspace-id={ODAL_WORKSPACE_ID}
      data-api-url={ODAL_API_URL}
    />
  );
}

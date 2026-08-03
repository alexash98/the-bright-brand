import Script from "next/script";
import {
  ODAL_API_URL,
  ODAL_SCRIPT_SRC,
  ODAL_WORKSPACE_ID,
} from "@/lib/odal/config";

export { ODAL_API_URL, ODAL_SCRIPT_SRC, ODAL_WORKSPACE_ID };

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

"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pushPageView } from "@/lib/analytics/gtm";

// App Router soft navigations do not fire a full page load, so GTM's default
// Page View trigger only sees the first hit. This listener pushes a page_view
// on every pathname/search change after the initial load (GTM handles that).
function GtmRouteListenerInner(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const search = searchParams.toString();
    const path = search ? `${pathname}?${search}` : pathname;
    pushPageView(path, document.title);
  }, [pathname, searchParams]);

  return null;
}

export function GtmRouteListener(): React.ReactElement {
  return (
    <Suspense fallback={null}>
      <GtmRouteListenerInner />
    </Suspense>
  );
}

import React from "react";

/**
 * Route template intentionally has no Motion wrapper.
 * Page transitions previously pulled motion/react into every route's critical path.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}

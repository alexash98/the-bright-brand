'use client';

import { EnquiryForm } from "@/components/site/EnquiryForm";

/** @deprecated Prefer `<EnquiryForm />` directly. Kept for call-site compat. */
export function ContactEnquirySection(): React.ReactElement {
  return <EnquiryForm />;
}

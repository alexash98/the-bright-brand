/**
 * Service detail pages are data-driven.
 *
 * To add a new service:
 * 1. Add a card entry to SERVICES in lib/seed-data.ts
 * 2. Add a matching ServiceDetail entry to SERVICE_DETAILS in lib/service-details.ts
 * 3. The route /services/[slug] is generated automatically
 */

export {
  SERVICE_DETAILS,
  getAllServiceSlugs,
  getServiceDetailBySlug,
} from "@/lib/service-details";

export type {
  ServiceApproachStep,
  ServiceCapability,
  ServiceDetail,
  ServiceOutcome,
} from "@/lib/seed-types";

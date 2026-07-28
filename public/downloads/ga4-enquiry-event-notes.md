# GA4 enquiry event implementation notes

- Implement event names exactly as in the JSON contract.
- Register custom dimensions for lead_type, page_type, development_id, crm_stage.
- Mark generate_lead as a key event first. Promote later stages when volume allows.
- Use event_id when both browser and server can fire the same enquiry.
- Consent Mode: do not treat denied ad storage hits as fully attributed paid conversions.
- Housebuilders: pass development_id on all enquiry events.
- Travel: prefer value = expected margin when known, else omit value rather than inventing it.

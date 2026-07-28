# Offline conversion field mapping

| Template column | Typical CRM source | Notes |
| --- | --- | --- |
| gclid | contact.gclid | Prefer over gbraid/wbraid when present |
| gbraid | contact.gbraid | App / iOS web traffic |
| wbraid | contact.wbraid | Web-to-app related traffic |
| conversion_name | fixed map by stage | Must match Google Ads conversion action name |
| conversion_time | stage changed at | Include timezone offset |
| conversion_value | amount or expected value | Number only |
| conversion_currency | deal currency | Must match Ads account or convert |
| order_id | deal id + stage | Deduplication key |
| ad_user_data_consent | consent property | GRANTED / DENIED where required |

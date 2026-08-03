import type { Post } from "@/lib/posts/types";

/**
 * Styling harness for the article template. Noindexed and excluded from the
 * sitemap. Numbers below are illustrative fixtures, not research findings.
 */
export const FIXTURE_SLUG = "component-kitchen-sink";

export const FIXTURE_BODY = `
<p>Offline conversion tracking only earns its keep when the match rate is high enough for Google and Meta to learn from closed revenue. Below that threshold, upload volume looks healthy while bidding still trains on enquiries that never became retained matters, deposits or renewals.</p>
<p>This fixture walks through the measurement components we use when we compare match rates across verticals. Treat every figure as an illustrative example for layout and spacing, not as a published study.</p>

<h2>Where match rates usually land</h2>
<p>Most accounts we audit sit between a thin first upload and a usable feedback loop. The gap is rarely the ad platform. It is missing click IDs on phone-led enquiries, CRM stages that skip the commercial event, or an upload window that expires before the deal closes. Read the <a href="https://www.thebrightbrand.com/brightbrand/how-to-set-up-meta-offline-conversion-tracking-in-2026">Meta offline conversion guide</a> if you need the implementation path, then come back to the comparison below.</p>
<p>When the loop is wired, <strong>closed revenue</strong> becomes the optimisation event and vanity form fills stop quietly winning the auction. That shift is <em>operational</em> before it is creative.</p>

<div class="bb-stats">
  <div class="bb-stat">
    <span class="bb-stat__num">38<em>%</em></span>
    <span class="bb-stat__label">Illustrative legal match rate</span>
  </div>
  <div class="bb-stat">
    <span class="bb-stat__num">52<em>%</em></span>
    <span class="bb-stat__label">Illustrative private medical match rate</span>
  </div>
  <div class="bb-stat">
    <span class="bb-stat__num">61<em>%</em></span>
    <span class="bb-stat__label">Illustrative SaaS opportunity match rate</span>
  </div>
  <div class="bb-stat bb-stat--soft">
    <span class="bb-stat__num">21<em>d</em></span>
    <span class="bb-stat__label">Illustrative median enquiry to close</span>
  </div>
</div>

<h2>Illustrative match rates by industry</h2>
<p>Use these bars to pressure-test layout at mobile widths. The accent row marks the vertical this fixture is tagged to for sidebar proof matching later.</p>
<div class="bb-bars">
  <div class="bb-bar__row">
    <div class="bb-bar__head">
      <span class="bb-bar__label">Private medical</span>
      <span class="bb-bar__val">52%</span>
    </div>
    <div class="bb-bar__track"><span class="bb-bar__fill" style="--v: 52%"></span></div>
  </div>
  <div class="bb-bar__row">
    <div class="bb-bar__head">
      <span class="bb-bar__label">SaaS / B2B platforms</span>
      <span class="bb-bar__val">61%</span>
    </div>
    <div class="bb-bar__track"><span class="bb-bar__fill" style="--v: 61%"></span></div>
  </div>
  <div class="bb-bar__row bb-bar__row--accent">
    <div class="bb-bar__head">
      <span class="bb-bar__label">Legal / solicitors</span>
      <span class="bb-bar__val">38%</span>
    </div>
    <div class="bb-bar__track"><span class="bb-bar__fill" style="--v: 38%"></span></div>
  </div>
  <div class="bb-bar__row">
    <div class="bb-bar__head">
      <span class="bb-bar__label">Home builders</span>
      <span class="bb-bar__val">44%</span>
    </div>
    <div class="bb-bar__track"><span class="bb-bar__fill" style="--v: 44%"></span></div>
  </div>
  <div class="bb-bar__row">
    <div class="bb-bar__head">
      <span class="bb-bar__label">Commercial insurance</span>
      <span class="bb-bar__val">33%</span>
    </div>
    <div class="bb-bar__track"><span class="bb-bar__fill" style="--v: 33%"></span></div>
  </div>
</div>

<div class="bb-quote">
  <div class="bb-quote__body">
    <p class="bb-quote__text">If the CRM cannot prove a closed pound, the ad account will keep buying cheaper enquiries that never become revenue.</p>
    <cite class="bb-quote__cite"><span class="bb-quote__name">Alex Ashcroft, Founder</span></cite>
  </div>
</div>

<h2>Upload quality checklist by channel</h2>
<div class="bb-data">
  <p class="bb-data__cap">Illustrative upload quality grid</p>
  <div class="bb-table">
    <div class="bb-table__scroll">
      <table>
        <thead>
          <tr>
            <th>Vertical</th>
            <th>Primary event</th>
            <th>Click ID coverage</th>
            <th>Upload window</th>
            <th>Match rate</th>
            <th>Usual leak</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Legal</td>
            <td>Instruction</td>
            <td>Partial phone</td>
            <td>90 days</td>
            <td>38%</td>
            <td>Reception calls untracked</td>
          </tr>
          <tr>
            <td>Private medical</td>
            <td>Consultation attended</td>
            <td>Strong form</td>
            <td>60 days</td>
            <td>52%</td>
            <td>Clinical free text in payloads</td>
          </tr>
          <tr>
            <td>SaaS</td>
            <td>Qualified opportunity</td>
            <td>Strong web</td>
            <td>120 days</td>
            <td>61%</td>
            <td>Demo booked != SQO</td>
          </tr>
          <tr>
            <td>Home builders</td>
            <td>Reservation</td>
            <td>Mixed</td>
            <td>180 days</td>
            <td>44%</td>
            <td>Sales suite offline path</td>
          </tr>
          <tr>
            <td>Commercial insurance</td>
            <td>Bind</td>
            <td>Thin</td>
            <td>150 days</td>
            <td>33%</td>
            <td>Broker portal handoff</td>
          </tr>
          <tr>
            <td>Wealth</td>
            <td>AUM onboarded</td>
            <td>Partial</td>
            <td>180 days</td>
            <td>29%</td>
            <td>Long advice cycle</td>
          </tr>
          <tr>
            <td>Recruitment</td>
            <td>Placement</td>
            <td>Strong</td>
            <td>90 days</td>
            <td>47%</td>
            <td>Job board noise</td>
          </tr>
          <tr>
            <td>Dental implants</td>
            <td>Treatment start</td>
            <td>Mixed</td>
            <td>90 days</td>
            <td>41%</td>
            <td>Consult no-shows</td>
          </tr>
          <tr>
            <td>Ecommerce</td>
            <td>First purchase</td>
            <td>Strong</td>
            <td>30 days</td>
            <td>72%</td>
            <td>Offline returns lag</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>Contract live</td>
            <td>Partial</td>
            <td>120 days</td>
            <td>36%</td>
            <td>Field sales CRM gap</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <p class="bb-data__source">Source: illustrative fixture values for template QA only. Not research, not client results, not benchmarks to quote.</p>
</div>

<h2>How a usable offline loop is staged</h2>
<div class="bb-stages">
  <div class="bb-stage bb-stage--1">
    <span class="bb-stage__badge">1</span>
    <div class="bb-stage__body">
      <p class="bb-stage__title">Capture the click identity</p>
      <p class="bb-stage__text">Write gclid, gbraid, wbraid and fbclid onto the enquiry record for form and call paths before anyone in sales touches the lead.</p>
    </div>
  </div>
  <div class="bb-stage bb-stage--2">
    <span class="bb-stage__badge">2</span>
    <div class="bb-stage__body">
      <p class="bb-stage__title">Map the commercial stages</p>
      <p class="bb-stage__text">Mirror how the business actually closes: qualified, quoted, instructed, reserved, bound. Do not invent a SaaS funnel for a solicitor firm.</p>
    </div>
  </div>
  <div class="bb-stage bb-stage--3">
    <span class="bb-stage__badge">3</span>
    <div class="bb-stage__body">
      <p class="bb-stage__title">Upload the closed event</p>
      <p class="bb-stage__text">Send the revenue-adjacent outcome back to Google and Meta inside the conversion window, with value rules the board can defend.</p>
    </div>
  </div>
  <div class="bb-stage bb-stage--4">
    <span class="bb-stage__badge">4</span>
    <div class="bb-stage__body">
      <p class="bb-stage__title">Bid on matched learning</p>
      <p class="bb-stage__text">Once match rates stabilise, move primary bidding to the closed event and keep enquiry volume as a diagnostic, not the north star.</p>
    </div>
  </div>
</div>

<figure>
  <img
    src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
    alt="Laptop showing charts and spreadsheets used for campaign measurement"
    width="1200"
    height="800"
    loading="lazy"
  />
  <figcaption>Illustrative measurement workspace. Photo for layout testing only.</figcaption>
</figure>

<h3>What usually breaks before the numbers do</h3>
<ul>
  <li>Phone-led enquiries with no dynamic number or click ID stitch</li>
  <li>
    CRM stages that jump from enquiry to won
    <ul>
      <li>No quote or instruction milestone</li>
      <li>No owner for the offline upload job</li>
    </ul>
  </li>
  <li>Upload windows shorter than the real sales cycle</li>
</ul>
<ol>
  <li>Audit click ID coverage on the last 90 days of enquiries</li>
  <li>Agree the commercial event finance will recognise</li>
  <li>Ship a thin upload, then widen value rules once matches hold</li>
</ol>

<div class="bb-faq">
  <details class="blog-faq-item">
    <summary>What match rate is “good enough” to bid on?</summary>
    <p>There is no universal number. The useful test is whether the platform receives enough matched closed events each week to change delivery. Below that, keep uploading for learning and bid on an earlier qualified stage.</p>
  </details>
  <details class="blog-faq-item">
    <summary>Do phone enquiries need the same treatment as forms?</summary>
    <p>Yes. In legal, medical and insurance, the commercial conversation often starts on the phone. If call tracking does not write click IDs into the CRM, your best traffic looks invisible.</p>
  </details>
  <details class="blog-faq-item">
    <summary>Should every vertical upload revenue?</summary>
    <p>Upload a value the business trusts. Some teams send revenue, some send a staged proxy such as instruction or consultation attended when fee data cannot leave the practice system.</p>
  </details>
  <details class="blog-faq-item">
    <summary>Why do SaaS accounts often out-match legal accounts?</summary>
    <p>Shorter web-led journeys and cleaner CRM ownership. Legal loses matches when reception, fee earner and marketing systems never share one enquiry identity.</p>
  </details>
  <details class="blog-faq-item">
    <summary>Is this fixture safe to cite externally?</summary>
    <p>No. Every percentage here is labelled illustrative for template QA. Do not quote it as research or as a Bright Brand client result.</p>
  </details>
</div>

<p class="bb-further-reading">Further reading on platform docs: <a href="https://developers.facebook.com/docs/marketing-api/conversions-api/offline-events" rel="noopener noreferrer" target="_blank">Meta offline events</a> and <a href="https://support.google.com/google-ads/answer/2998031" rel="noopener noreferrer" target="_blank">Google Ads offline conversion imports</a>.</p>
`.trim();

export const FIXTURE_POST: Post = {
  title: "Offline conversion match rates by industry: a measurement fixture",
  slug: FIXTURE_SLUG,
  date: "2026-07-31",
  category: "Marketing",
  subtitle:
    "Illustrative layout harness for stats, bars, tables and FAQ components used in Bright Brand articles",
  metaDescription:
    "Internal fixture article for styling Bright Brand blog components. Illustrative offline conversion match-rate examples only. Not for indexing.",
  author: {
    name: "Alex Ashcroft",
    position: "Founder",
  },
  body: FIXTURE_BODY,
  tags: ["offline-conversions", "legal", "meta-ads", "attribution"],
  heroImageUrl:
    "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600",
  heroImageAlt:
    "Person reviewing colourful analytics charts on a desk display",
  featuredVideo: "M7lc1UVf-VE",
  videoHeading: "How measurement loops change bidding",
  videoDate: "2024-01-15",
  readTime: 8,
  excerpt:
    "Illustrative fixture covering every article component class for template QA.",
  source: "repo",
  isFixture: true,
};

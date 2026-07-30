export const CONTACT = {
  address: {
    line1: "124 City Road",
    line2: "London, EC1V 2NX",
  },
  email: "hello@thebrightbrand.com",
  contactPartnerEmail: "alex@thebrightbrand.com",
  onlineLabel: "Online now",
  responseTime: "Usually replies within one business day",
  hosts: [
    {
      name: "Alex",
      avatarSrc: "/team/alex-ashcroft.png",
      avatarAlt: "Alex at The Bright Brand",
    },
    {
      name: "Ollie",
      avatarSrc: "/team/ollie.png",
      avatarAlt: "Ollie at The Bright Brand",
    },
  ],
} as const;

// Discovery call booking link, used on every CTA.
export const CALENDLY_URL =
  "https://calendly.com/alex-thebrightbrand/growth-strategy-call";

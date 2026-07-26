/**
 * Central site data — single source of truth for contact info,
 * hours, social links, and map embed used across Footer, ContactPage, etc.
 *
 * Branding: Kape Al Vista
 * Location: Kabankalan City, Negros Occidental, Philippines
 */

export const site = {
  name: "Kape Al Vista",
  tagline: "Burgers · Coffee · Thai",
  description:
    "Good food, great coffee, and authentic Thai flavors — made with love for every guest.",

  address: {
    street: "39 Rojas Street",
    city: "Kabankalan City",
    region: "Negros Occidental",
    country: "Philippines",
  },

  phone: "0912 345 6789",
  phone_href: "+639123456789",

  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 10:00 PM" },
    { days: "Saturday", time: "9:00 AM – 11:00 PM" },
    { days: "Sunday", time: "9:00 AM – 10:00 PM" },
  ],

  social: {
    facebook: "https://www.facebook.com/kapealvista",
  },

  map_embed:
    "https://www.google.com/maps?q=39+Rojas+St,+Kabankalan,+Negros+Occidental,+Philippines&output=embed",

  maps_direction:
    "https://www.google.com/maps/dir/?api=1&destination=39+Rojas+St,+Kabankalan,+Negros+Occidental,+Philippines",
}

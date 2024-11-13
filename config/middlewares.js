module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:5173", "https://blog.septiawantechnology.com"], // Ganti dengan domain frontend kamu
      methods: ["GET", "POST", "PUT", "DELETE"], // Tentukan metode HTTP yang diperbolehkan
      allowedHeaders: ["Content-Type", "Authorization"], // Tentukan header yang diperbolehkan
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

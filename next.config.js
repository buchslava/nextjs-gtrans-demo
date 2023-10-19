/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_TRANSLATION_CONFIG: JSON.stringify({
      languages: [
        { title: "English", name: "en" },
        { title: "Deutsch", name: "de" },
        { title: "Español", name: "es" },
        { title: "Français", name: "fr" },
      ],
      defaultLanguage: "en",
    }),
  },
};

module.exports = nextConfig;

export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Talen",
    description: "Persoonlijke website van Ruben Sibon, een software developer uit Amsterdam.",
    about: {
      profession: "Softwareontwikkelaar",
    },
    tagList: {
      "software-development": "softwareontwikkeling",
      programming: "programmeren",
      cs: "informatica",
      linux: "GNU/Linux",
      foss: "Vrije & Open Source Software",
      "open-source": "Open Source",
      history: "geschiedenis",
      javascript: "JavaScript",
      typescript: "TypeScript",
      vuejs: "Vue.js",
      nuxtjs: "Nuxt.js",
      react: "React",
      "react-native": "React Native",
      python: "Python",
      c: "C",
    },
  });
};

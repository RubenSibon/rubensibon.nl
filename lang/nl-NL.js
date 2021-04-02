export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Talen",
    description: "Persoonlijke website van Ruben Sibon, een software developer uit Amsterdam.",
    about: {
      profession: "Softwareontwikkelaar",
    },
    tagList: {
      software_dev: "softwareontwikkeling",
      programming: "programmeren",
      cs: "informatica",
      linux: "GNU/Linux",
      foss: "Vrije & Open Source Software",
      open_source: "Open Source",
      history: "geschiedenis",
      javascript: "JavaScript",
      typescript: "TypeScript",
      vuejs: "Vue.js",
      nuxtjs: "Nuxt.js",
      react: "React",
      react_native: "React Native",
      python: "Python",
      c: "C",
    },
  });
};

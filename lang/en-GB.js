export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Languages",
    description: "Personal website of Ruben Sibon, a software developer from Amsterdam, The Netherlands.",
    about: {
      profession: "Software developer",
    },
    tags: "Tags",
    tagList: {
      software_dev: "software development",
      programming: "programming",
      cs: "computer science",
      linux: "GNU/Linux",
      foss: "Free & Open Source Software",
      open_source: "Open Source",
      history: "history",
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

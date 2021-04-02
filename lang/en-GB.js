export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Languages",
    description: "Personal website of Ruben Sibon, a software developer from Amsterdam, The Netherlands.",
    about: {
      profession: "Software developer",
    },
    tagList: {
      "software-development": "software development",
      cs: "computer science",
      programming: "programming",
      linux: "GNU/Linux",
      foss: "Free & Open Source Software",
      "open-source": "Open Source",
      history: "history",
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

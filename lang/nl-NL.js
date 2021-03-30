export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Talen",
    post: {
      hoursAgo: "uur geleden | uren geleden",
      daysAgo: "dag geleden | dagen geleden",
      posted: "Geplaatst",
      updated: "Aangepast",
    },
    profession: "Softwareontwikkelaar",
    categories: {
      "software-development": "softwareontwikkeling",
      cs: "informatica",
    },
    tags: {
      programming: "programmeren",
      c: "C",
      history: "geschiedenis",
    },
  });
};

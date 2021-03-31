export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Talen",
    post: {
      hoursAgo: "uur geleden | uren geleden",
      daysAgo: "dag geleden | dagen geleden",
      posted: "Geplaatst",
      updated: "Aangepast",
      toc: "Inhoudsopgave",
      category: "Categorie",
      tags: "Labels",
    },
    profession: "Softwareontwikkelaar",
    tags: {
      "software-development": "softwareontwikkeling",
      cs: "informatica",
      programming: "programmeren",
      c: "C",
      history: "geschiedenis",
    },
  });
};

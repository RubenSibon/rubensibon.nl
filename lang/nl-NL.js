export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Talen",
    post: {
      postedOn: "Geplaatst op",
      updatedOn: "Aangepast op",
    },
    profession: "Softwareontwikkelaar",
    categories: {
      "software-development": "softwareontwikkeling",
    },
  });
};

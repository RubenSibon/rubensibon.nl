export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Languages",
    post: {
      postedOn: "Posted on",
      updatedOn: "Edited on",
    },
    profession: "Software developer",
    categories: {
      "software-development": "software development",
    },
  });
};

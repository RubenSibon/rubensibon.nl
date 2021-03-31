export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Languages",
    post: {
      hoursAgo: "hour ago | hours ago",
      daysAgo: "day ago | days ago",
      posted: "Posted",
      updated: "Edited",
      toc: "Table of Contents",
      category: "Category",
      tags: "Tags",
    },
    profession: "Software developer",
    tags: {
      "software-development": "software development",
      cs: "computer science",
      programming: "programming",
      c: "C",
      history: "history",
    },
  });
};

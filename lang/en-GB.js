export default async (_context, _locale) => {
  return await Promise.resolve({
    languages: "Languages",
    post: {
      hoursAgo: "hour ago | hours ago",
      daysAgo: "day ago | days ago",
      posted: "Posted",
      updated: "Edited",
    },
    profession: "Software developer",
    categories: {
      "software-development": "software development",
      cs: "computer science history",
    },
    tags: {
      history: "geschiedenis",
      programming: "programming",
      c: "C",
    },
  });
};

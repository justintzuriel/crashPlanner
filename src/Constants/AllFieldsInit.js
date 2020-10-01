import * as Filters from "./Filters";

export const allFieldsInit = () => {
  const arr = {
    all: {
      id: "all",
      name: "ALL",
      filter: () => true,
    },
    algo: {
      id: "algo",
      name: "Algorithms and Theory",
      filter: Filters.FilterAlgo,
    },
    ai: {
      id: "ai",
      name: "Artificial Intelligence",
      filter: Filters.FilterAI,
    },
    graphics: {
      id: "graphics",
      name: "Computer Graphics and Games",
      filter: Filters.FilterGraphics,
    },
    security: {
      id: "security",
      name: "Computer Security",
      filter: Filters.FilterSecurity,
    },
    db: {
      id: "db",
      name: "Database Systems",
      filter: Filters.FilterDB,
    },
    media: {
      id: "media",
      name: "Multimedia Information Retrieval",
      filter: Filters.FilterMedia,
    },
    network: {
      id: "network",
      name: "Networking and Distributed Systems",
      filter: Filters.FilterNetwork,
    },
    parallel: {
      id: "parallel",
      name: "Parallel Computing",
      filter: Filters.FilterParallel,
    },
    language: {
      id: "language",
      name: "Programming Languages",
      filter: Filters.FilterLanguages,
    },
    se: {
      id: "se",
      name: "Software Engineering",
      filter: Filters.FilterSE,
    },
  };
  return arr;
};

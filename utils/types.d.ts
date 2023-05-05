type TNavigationOptionsID = 0 | 1 | 2;

interface TRepo {
  node: {
    name: string;
    repositoryTopics: {
      edges: Array<{
        node: {
          id: string;
          topic: {
            id: string;
            name: string;
          };
        };
      }>;
    };
    primaryLanguage: {
      id: string;
      name: string;
    };
    description: string;
    url: string;
    stargazerCount: number;
    owner: {
      login: string;
    };
  };
}

interface graphqlResponse {
  user: {
    pinnedItems: {
      totalCount: number;
      edges: Array<TRepo>;
    };
  };
}

export { TNavigationOptionsID, graphqlResponse, TRepo };

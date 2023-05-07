import type { ParsedUrlQuery } from 'querystring';

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
      color: string;
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

interface TBlog {
  id: string;
  Title: string;
  Date: string;
  File: string;
  Subtext: string;
}

interface IParamsBlog extends ParsedUrlQuery {
  blogID: string;
}

export { TNavigationOptionsID, graphqlResponse, TRepo, TBlog, IParamsBlog };

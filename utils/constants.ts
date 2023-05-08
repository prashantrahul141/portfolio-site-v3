export const GH_USERNAME = 'prashantrahul141';
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const GRAPH_QL_QUERY = `
{
  user(login: "prashantrahul141") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name
            repositoryTopics(first: 3) {
              edges {
                node {
                  id
                  topic {
                    id
                    name
                  }
                }
              }
            }
            primaryLanguage {
              id
              name
              color
            }
            description
            url
            stargazerCount
            owner {
              login
            }
          }
        }
      }
    }
  }
}
`;

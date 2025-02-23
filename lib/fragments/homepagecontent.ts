import { shopifyGraphQLQuery } from "../shopifyClient";

const homepagetext = `
query MyQuery {
  pages(first: 10) {
    edges {
      node {
        id
        body
      }
    }
  }
}
`;

export default async function GetHomepageContent() {
  const data = shopifyGraphQLQuery(homepagetext);
  return data;
}

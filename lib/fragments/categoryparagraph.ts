import { shopifyGraphQLQuery } from "../shopifyClient";

const categoryparagraph = `
query MyQuery {
  pages(first: 10) {
    edges {
      node {
        id
        title
        metafield(namespace: "custom", key: "category_paragraph") {
          id
          namespace
          key
          value
        }
      }
    }
  }
}
`;

export async function GetCategoryParagraph() {
  const data = shopifyGraphQLQuery(categoryparagraph);
  console.log(data);
  return data;
}

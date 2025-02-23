import { shopifyGraphQLQuery } from "../shopifyClient";

export const headermenu = `
query MyQuery {
  menu(handle: "Header") {
    id
    handle
    items {
      title
      url
      type
      items {
        id
        title
        url
      }
    }
  }
}
`;

export async function getHeaderMenu() {
  const data = await shopifyGraphQLQuery(headermenu);
  return data;
}

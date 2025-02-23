// fragments/pagehandle.ts

import { shopifyGraphQLQuery } from "../shopifyClient";

const PAGE_HANDLE_QUERY = `
  query getPage($handle: String!) {
    page(handle: $handle) {
      id
      title
      body
    }
  }
`;

export async function getPageByHandle(handle: string) {
  // Pass the handle as a variable, and await the call
  const data = await shopifyGraphQLQuery(PAGE_HANDLE_QUERY, { handle });
  console.log("Shopify returned:", data);
  // Assuming `shopifyGraphQLQuery` returns an object with `page` in `data`
  return data?.page;
}

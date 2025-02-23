import { shopifyGraphQLQuery } from "../shopifyClient";

export const shopname = `
  query {
    shop {
      name
      description
      moneyFormat
    }
  }
`;

export async function getShopData() {
  const data = await shopifyGraphQLQuery(shopname);
  return data;
}

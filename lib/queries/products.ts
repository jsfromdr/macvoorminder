import { shopifyGraphQLQuery } from "../shopifyClient";

export const products = `
query MyQuery {
  products(first: 10) {
    edges {
      node {
        id
        title
        handle
        featuredImage {
          transformedSrc(maxHeight: 1000, maxWidth: 1000)
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

export async function getProductsData() {
  const data = await shopifyGraphQLQuery(products);
  return data;
}

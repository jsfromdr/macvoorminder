/**
 * Fetches the Product Aanbiedingen
 */

import { shopifyGraphQLQuery } from "../shopifyClient";

const aanbiedingen = `
query MyQuery {
  collection(handle: "Aanbieding") {
    id
    title
    products(first: 10) {
      edges {
        node {
          id
          images(first: 10) {
            edges {
              node {
                id
                altText
                src
                width
                height
              }
            }
          }
          title
          variants(first: 10) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
                product {
                  collections(first: 10) {
                    edges {
                      node {
                        id
                        products(first: 10) {
                          edges {
                            node {
                              id
                              title
                              priceRange {
                                maxVariantPrice {
                                  amount
                                }
                                minVariantPrice {
                                  amount
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export async function GetAanbiedingen() {
  const data = shopifyGraphQLQuery(aanbiedingen);
  return data;
}

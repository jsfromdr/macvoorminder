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
          images(first: 1) {
            edges {
              node {
                id
                altText
                url
                width
                height
                src
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

// shopifyClient.ts

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

/**
 * Create and export the Shopify Storefront API client.
 * This is a one-time setup you can reuse in other files.
 */

export const client = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN!,
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  apiVersion: "2025-01",
});

/**
 * Reusable function to send GraphQL queries to the Storefront API.
 * @param query - GraphQL query string
 * @param variables - Optional GraphQL variables
 * @returns Data returned from Shopify
 */

export async function shopifyGraphQLQuery(query: string) {
  const { data } = await client.request(query);
  return data;
}

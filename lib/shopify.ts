const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function getPageByHandle(handle: string) {
  const query = `
    query getPage($handle: String!) {
      page(handle: $handle) {
        id
        title
        body
      }
    }
  `;
  const res = await fetch(`https://${domain}/api/2023-07/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token || "",
    },
    body: JSON.stringify({ query, variables: { handle } }),
  });

  if (!res.ok) {
    throw new Error(`Error fetching page: ${res.status}`);
  }
  const { data } = await res.json();
  return data.page;
}

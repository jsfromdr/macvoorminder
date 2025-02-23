import GetHomepageContent from "@/lib/fragments/homepagecontent";

/**
 *
 * https://www.npmjs.com/package/@contentful/rich-text-plain-text-renderer
 */

export default async function Information() {
  const homepagecontent = await GetHomepageContent();
  const { pages } = homepagecontent;

  return (
    <section className="flex flex-col gap-6 p-16 px-64">
      {pages.edges.map(({ node }) => (
        <article key={node.id}>
          <h2>{node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.body }} />
        </article>
      ))}
    </section>
  );
}

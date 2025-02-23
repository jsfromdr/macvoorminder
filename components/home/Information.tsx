import GetHomepageContent from "@/lib/fragments/homepagecontent";

// Inline type definitions for the homepage content data
interface PageNode {
  id: string;
  title: string;
  body: string;
}

/**
 * Information component renders homepage content.
 *
 * https://www.npmjs.com/package/@contentful/rich-text-plain-text-renderer
 */
export default async function Information() {
  const homepageContent = await GetHomepageContent();
  // Assuming homepageContent.pages matches our PagesData type
  const { pages } = homepageContent;

  return (
    <section className="flex flex-col gap-6 p-16 px-64">
      {pages.edges.map(({ node }: { node: PageNode }) => (
        <article key={node.id}>
          <h2>{node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.body }} />
        </article>
      ))}
    </section>
  );
}
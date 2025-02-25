// app/[handle]/page.tsx
import { getPageByHandle } from "@/lib/shopify";
import React from "react";

type PageProps = {
  params: { handle: string };
};

export default async function PageByHandle({
  params,
}: PageProps): Promise<React.ReactElement> {
  const page = await getPageByHandle(params.handle);

  if (!page) {
    return (
      <div>
        <h1 className="text-red-500">Page not found</h1>
      </div>
    );
  }

  return (
    <main>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    </main>
  );
}

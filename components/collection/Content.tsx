import ProductListing from "../product/ProductListing";

import Information from "../home/Information";
import Link from "next/link";

export default function Content() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900">MacBook Air</h1>
        <p className="text-gray-700">
          Mac voor minder heeft een ruim assortiment aan MacBook Air 13 inch en
          15 inch Air modellen in de staat “Nieuw” en “Als nieuw”. Onze ‘als
          nieuw’ Air modellen zijn tweedehands of open doos. Deze zijn amper van
          nieuw te onderscheiden en vaak enkele weken tot maanden oud.
        </p>
        <Link className="font-medium text-gray-700 underline" href="">
          Verder lezen
        </Link>
      </div>
      <ProductListing
        productImage="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/macbook-air-13-midnight-2022-1_2x-1_jpg.webp?v=1739989640"
        productTitle="MacBook Air 15 inch M2 8GB 256GB SSD "
        price={1049}
        discount={34}
        discountedPrice={979}
        cpu="M2"
        gpu="M2 Pro"
        modelYear={2020}
        color="Black"
      />
      <Information />
    </section>
  );
}

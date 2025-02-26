// app/page.tsx

import Slogan from "@/components/home/Slogan";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ProductListing from "@/components/product/ProductListing";
import Benefits from "@/components/home/Benefits";
import Information from "@/components/home/Information";
import Footer from "@/components/layout/footer/Footer";
import Subfooter from "@/components/layout/footer/Subfooter";
import Copyright from "@/components/layout/footer/Copyright";
import { GetAanbiedingen } from "@/lib/queries/getAanbiedingen";

export default async function Home() {
  const aanbiedingen = await GetAanbiedingen();
  return (
    <main>
      <Hero />
      <Slogan />
      <Products products={aanbiedingen} />
      <Benefits />
      <Information />
      <Footer />
      <Subfooter />
      <Copyright />
    </main>
  );
}

function Hero() {
  return (
    <section className="flex items-center justify-between bg-gradient-to-b from-sky-950 to-black p-4 pt-36">
      <div className="flex flex-col gap-24">
        <div className="flex w-full items-center justify-between">
          <h1>
            De nieuwste tweedehands Mac modellen voor de <br /> beste prijs.
          </h1>
          <Checklist />
        </div>
        <FeaturedCategories />
      </div>
    </section>
  );
}

function Checklist() {
  return (
    <ul className="space-y-2">
      <li className="flex items-center gap-2">
        <CheckCircleIcon className="h-6 text-green-500" />
        <span className="text-white">
          Altijd <strong>5 sterren</strong> conditie: als nieuw
        </span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircleIcon className="h-6 text-green-500" />
        <span className="text-white">
          Meest <strong>diverse</strong> aanbod: voor de student én de
          professional
        </span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircleIcon className="h-6 text-green-500" />
        <span className="text-white">
          <strong>Direct</strong> uit <strong>voorraad</strong> leverbaar
        </span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircleIcon className="h-6 text-green-500" />
        <span className="text-white">
          Minimaal <strong>24 maanden</strong> garantie
        </span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircleIcon className="h-6 text-green-500" />
        <span className="text-white">
          Onze klanten beoordelen ons met <strong>Uitstekend</strong> op
          Trustpilot
        </span>
      </li>
    </ul>
  );
}

function FeaturedCategories() {
  return (
    <section className="-mb-36 grid grid-cols-6 gap-4">
      <Category
        title='Macbook Air 13 "'
        src="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/macbook-air-13-midnight-2022-1_2x-1_jpg.webp?v=1739989640"
        alt="Photo of Macbook Air 13'"
      />
      <Category
        title='Macbook Air 15 "'
        src="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/macbook-air-15-inch-front-2023-silver_jpg.webp?v=1739990732"
        alt="Photo of Macbook Air 15'"
      />
      <Category
        title='Macbook Pro 14 "'
        src="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/macbook-pro-14-inch-open-2021-silver-1_jpg.webp?v=1739990974"
        alt="Photo of Macbook Pro 14'"
      />
      <Category
        title='Macbook Pro 16 "'
        src="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/macbook-pro-16-inch-open-2023-space-black_jpg.webp?v=1739990994"
        alt="Photo of Macbook Pro 16'"
      />
      <Category
        title="Mac Studio"
        src="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/mac-studio-top_2x_jpg.webp?v=1739991275"
        alt="Photo of Mac Studio"
      />
      <Category
        title="iPad Pro"
        src="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/iPad-Pro-11-inch-M4-2024-Space-Black_jpg.webp?v=1739991293"
        alt="Photo of iPad Pro"
      />
    </section>
  );
}

function Category({
  src,
  title,
  alt,
}: {
  src: string;
  title: string;
  alt: string;
}) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 bg-white p-8 text-center transition-all duration-300 hover:translate-y-[-10px]">
      <Image src={src} alt={alt} width={200} height={200} quality={1} />
      <h5 className="font-semibold text-gray-800">{title}</h5>
    </div>
  );
}

function Products({ products }) {
  return (
    <section className="flex flex-col items-center justify-center gap-14">
      <h2 className="text-3xl font-bold text-black">Altijd scherp geprijsd</h2>
      <div className="grid grid-cols-4 gap-x-8 gap-y-24 p-4">
        {products.edges.map((product) => (
          <ProductListing
            productImage={product.src}
            productTitle={product.title}
            price={product.price.amount}
            discount={34}
            discountedPrice={979}
            cpu="M2"
            gpu="M2 Pro"
            modelYear={2020}
            color="Black"
            key={`${crypto.randomUUID}`}
          />
        ))}
      </div>
      <button className="rounded-md bg-slate-800 px-6 py-4 text-lg font-medium text-white transition-all duration-300 hover:translate-y-[-5px]">
        Bekijk ons aanbod
      </button>
    </section>
  );
}

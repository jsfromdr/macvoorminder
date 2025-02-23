import Image from "next/image";

export default function Benefits() {
  return (
    <section className="mt-16 grid grid-cols-3 gap-x-12 bg-gray-50 p-16 text-center">
      <Feature
        title="Inkopen in grote getalen"
        paragraph="Mac voor minder koopt zijn tweedehands MacBook Air, MacBook Pro, iMac en iPad modellen groots in."
        image="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/inkopen-in-grote-getallen.png?v=1740216774"
      />
      <Feature
        title="Grondige check"
        paragraph="Alle MacBook Pro en MacBook Air modellen worden grondig gecontroleerd en wijken niet af van nieuw."
        image="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/grondige-check.png?v=1740216774"
      />
      <Feature
        title="Geen refurbished producten"
        paragraph="Onze modellen zijn tweedehands, dus niet refurbished. Eventueel resterende fabrieksgarantie blijft geldig."
        image="https://cdn.shopify.com/s/files/1/0878/4684/6800/files/geen-refurbished-producten.png?v=1740216774"
      />
    </section>
  );
}

function Feature({
  title,
  paragraph,
  image,
}: {
  title: string;
  paragraph: string;
  image: string;
}) {
  return (
    <article className="flex flex-col items-center justify-center gap-10">
      <Image
        width={300}
        height={300}
        src={image}
        alt={image}
        className="max-h-64 max-w-64 rounded-full border border-slate-400 object-cover"
      />
      <div className="flex flex-col gap-2">
        <h5>{title}</h5>
        <p className="text-slate-600">{paragraph}</p>
      </div>
    </article>
  );
}

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Filter() {
  return (
    <section className="sticky bottom-0 left-0 top-4 flex w-full max-w-xs flex-col gap-0 rounded-md border border-gray-300">
      <FilterSection title="Filteren" />
      <FilterSection hasChevron="true" title="Modeljaar" />
      <FilterSection hasChevron="true" title="Schermformaat" />
      <FilterSection hasChevron="true" title="RAM geheugen" />
      <FilterSection hasChevron="true" title="Opslag" />
      <FilterSection hasChevron="true" title="Grafische kaart" />
      <FilterSection hasChevron="true" title="Kleur" />
    </section>
  );
}

function FilterSection({ title, hasChevron }) {
  return (
    <div className="flex items-center justify-between border-b border-b-gray-200 px-4 py-6">
      <h6 className="font-semibold text-gray-800">{title}</h6>
      {hasChevron && <ChevronDownIcon />}
    </div>
  );
}

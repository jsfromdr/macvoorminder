const sections = [
  {
    title: "Categorieën",
    items: [
      "Mac",
      "MacBook Air",
      "MacBook Pro",
      "iMac",
      "iPad",
      "iPhone",
      "Watch",
      "Inruilen",
    ],
  },
  {
    title: "Algemeen",
    items: [
      "24 maanden garantie",
      "Veelgestelde vragen",
      "Waarom kopen bij macvoorminder.nl?",
      "Conditie van het Apple product",
      "Hoe kan ik betalen?",
      "Retouraanvraag",
      "Lees hier onze blogs",
      "Bijna als nieuw",
      "Contact",
    ],
  },
  {
    title: "Mac voor minder",
    items: [
      "Algemene voorwaarden",
      "Privacy beleid",
      "Cookies",
      "Contact",
      "Werken bij",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-8 py-16">
      <div className="flex gap-24">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-6">
            <h6 className="text-xl font-bold text-slate-900">
              {section.title}
            </h6>
            <ul className="flex flex-col gap-2 text-base text-slate-700">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-6">
          <h6 className="text-xl font-bold text-slate-900">Mac voor minder</h6>
          <div>
            <p className="text-base font-semibold text-slate-700">
              Bezoekadres
            </p>
            <p className="text-base text-slate-700">Kaasjeskruidstraat 48</p>
            <p className="text-base text-slate-700">1032 LS Amsterdam</p>
            <p className="text-base italic text-slate-700">
              (Alleen op afspraak)
            </p>
          </div>
          <div>
            <p className="text-base font-semibold text-slate-700">
              Contact informatie
            </p>
            <p className="text-base text-slate-700 underline">
              support@macvoorminder.nl
            </p>
            <p className="text-base text-slate-700 underline">085 060 6664</p>
          </div>
          <div>
            <p className="text-base font-semibold text-slate-700">
              Volg ons op:
            </p>
            <div className="flex gap-4">
              <span className="text-base font-bold">X</span>
              <span className="text-base font-bold">X</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="text-xl font-bold text-slate-900">Trustpilot</h6>
          <p className="text-base text-slate-700">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </footer>
  );
}

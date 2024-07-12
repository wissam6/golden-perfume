const callouts = [
  {
    name: "Men's Collection",
    description: "Work from home accessories",
    imageSrc:
      "https://gracia-cosmetics.com/storage/products/versace-eros-eau-de-parfum-parfyumna-voda-edp-405947228.webp",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Women's Collection",
    description: "Journals and note-taking",
    imageSrc: "https://i.makeup.bg/w/wp/wpg84bmwipq3.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Kid's Collection",
    description: "Daily commute essentials",
    imageSrc:
      "https://stardustcosmetics.gr/wp-content/uploads/2022/01/lorenay-batman-eau-de-toilette-50ml.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Collections() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="text-xl font-semibold text-gray-900">
                  {callout.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

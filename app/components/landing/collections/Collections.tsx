import { useState } from "react";

const callouts = [
  {
    name: "Men's Collection",
    description: "Work from home accessories",
    imageSrc: "/images/man_with_perfume.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Women's Collection",
    description: "Journals and note-taking",
    imageSrc:
      "https://images.pexels.com/photos/8450339/pexels-photo-8450339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
];

export default function Collections() {
  const [opacity, setOpacity] = useState(0);
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => {
              console.log(callout);
              return (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center figure absolute"
                    />

                    <img
                      alt={callout.imageAlt}
                      src={
                        "https://images.pexels.com/photos/8450196/pexels-photo-8450196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      }
                      className="h-full w-full object-cover object-center absolute"
                      onMouseEnter={() => setOpacity(100)}
                      onMouseLeave={() => setOpacity(0)}
                      style={{
                        opacity: opacity,
                      }}
                    />
                  </div>
                  <p className="text-xl font-semibold text-gray-900">
                    {callout.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import ImgMediaCard from "../../card/Card";

export default function MensPerfume() {
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = () => {
    return (
      <div className="flex items-center justify-center">
        <ImgMediaCard />
      </div>
    );
  };

  return (
    <PrimeReactProvider>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 py-9">Mens Perfume</h2>
        <Carousel
          value={["1", "2", "3", "4", "5", "6"]}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          autoplayInterval={3000}
        />
      </div>
    </PrimeReactProvider>
  );
}

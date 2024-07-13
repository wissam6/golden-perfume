"use client";
import AppBar from "./components/appbar/AppBar";
import Collections from "./components/landing/collections/Collections";
import ProductList from "./components/landing/simple-product-list/SimpleProductList";
import Testimonials from "./components/landing/testimonials/Testimonials";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const brandsControl = useAnimation();
  const [brandsRef, brandsInView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  useEffect(() => {
    if (brandsInView) {
      setTimeout(() => {
        brandsControl.start({ x: 0 });
      }, 600);
    } else {
      brandsControl.start({ x: -500 });
    }
  }, [brandsControl, brandsInView]);
  return (
    <main className="">
      <AppBar />
      <motion.div
        ref={ref}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        initial="hidden"
        animate={control}
        className="box"
      >
        <Testimonials />
      </motion.div>
      <video autoPlay={false} loop={true} muted={true}>
        <source
          src={
            "https://www.dior.com/couture/var/dior/storage/original/video/ddfe8821d149731d34a4a2734ba0a3d6.mp4"
          }
          type="video/mp4"
        />
      </video>
      <Collections />
      <motion.div
        ref={brandsRef}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        initial={{ x: -400 }}
        animate={brandsControl}
      >
        <ProductList />
      </motion.div>
      top sellers
    </main>
  );
}

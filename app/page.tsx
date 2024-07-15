"use client";
import AppBar from "./components/appbar/AppBar";
import Collections from "./components/landing/collections/Collections";
import ProductList from "./components/landing/simple-product-list/SimpleProductList";
import Testimonials from "./components/landing/testimonials/Testimonials";
import MensPerfume from "./components/landing/mens-perfume/MensPerfume";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import WomensPerfume from "./components/landing/womens-perfume/WomensPerfume";
import Footer from "./components/footer/Footer";

export default function Home() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const brandsControl = useAnimation();
  const [brandsRef, brandsInView] = useInView();

  const mensPerfumeControl = useAnimation();
  const [mensPerfume, mensPerfumeInView] = useInView();

  const womensPerfumeControl = useAnimation();
  const [womensPerfume, womensPerfumeInView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
      mensPerfumeControl.start("hidden");
      womensPerfumeControl.start("hidden");
      brandsControl.start({ x: -500 });
    } else if (mensPerfumeInView) {
      mensPerfumeControl.start("visible");
      control.start("hidden");

      womensPerfumeControl.start("hidden");
      brandsControl.start({ x: -500 });
    } else if (womensPerfumeInView) {
      womensPerfumeControl.start("visible");
      control.start("hidden");
      mensPerfumeControl.start("hidden");

      brandsControl.start({ x: -500 });
    } else if (brandsInView) {
      setTimeout(() => {
        brandsControl.start({ x: 0 });
        control.start("hidden");
        mensPerfumeControl.start("hidden");
        womensPerfumeControl.start("hidden");
      }, 300);
    } else {
      control.start("hidden");
      mensPerfumeControl.start("hidden");
      womensPerfumeControl.start("hidden");
      brandsControl.start({ x: -500 });
    }
  }, [
    control,
    inView,
    mensPerfumeInView,
    mensPerfumeControl,
    brandsControl,
    brandsInView,
    womensPerfumeInView,
    womensPerfumeControl,
  ]);

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
      <div className="flex">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          style={{ width: "100%", height: "500px", padding: "10px" }}
        >
          <source
            src={
              "https://videos.pexels.com/video-files/4154242/4154242-uhd_2732_1440_25fps.mp4"
            }
            type="video/mp4"
          />
        </video>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          style={{ width: "100%", height: "500px", padding: "10px" }}
        >
          <source
            src={
              "https://videos.pexels.com/video-files/4154241/4154241-uhd_2732_1440_25fps.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>

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
      <motion.div
        ref={mensPerfume}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        initial="hidden"
        animate={mensPerfumeControl}
        className="box"
      >
        <MensPerfume />

        <WomensPerfume />
      </motion.div>
      <Footer />
    </main>
  );
}

import AppBar from "./components/appbar/AppBar";
import Collections from "./components/landing/collections/Collections";
import ProductList from "./components/landing/simple-product-list/SimpleProductList";
import Testimonials from "./components/landing/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="">
      <AppBar />
      <Testimonials />
      <Collections />
      <ProductList />
      top sellers
    </main>
  );
}

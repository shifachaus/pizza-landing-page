import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./components/product-card";
import DataWrapper from "./components/data-wrapper";

const products: Product[] = [
  {
    id: "1",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "2",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "3",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "4",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "5",
    name: "Margarita Pizza",
    description: "This is a very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
];

export default function Home() {
  // external api data
  const data = {
    id: "1",
    name: "Margarita Pizza",
  };

  return (
    <>
      <DataWrapper data={data} />
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          <div className="">
            <h1 className="text-7xl font-black font-sans leading-2">
              Super Delicious pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>

            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>

            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
              Get your pizza now
            </Button>
          </div>

          <div className="">
            <Image
              src={"/pizza-main.png"}
              alt="pizza-main"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="beverages" className="text-md">
                Beverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}

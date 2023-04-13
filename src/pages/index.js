import Layout from "@/components/Layout";
import axios from "axios";
//import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

function HomePage({ products }) {
  const renderProducts = () => {
if(products.length === 0) return <h1 className="text-center text-2xl font-bold">No products yet</h1>

    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };
  //console.log(products);
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {renderProducts()}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  //console.log(context)
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products,
    },
  };
};

export default HomePage;

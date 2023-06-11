import Layout from "@/components/Layout";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";

function HomePage({ products }) {
  const renderProducts = () => {
    if (products.length === 0)
      return (
        <h1 className="text-center text-2xl font-bold">No expenses yet</h1>
      );

    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <Layout>
      <h1 className="mb-8 text-2xl font-bold tracking-tight text-gray-800 dark:text-white text-center mt-8">ALL EXPENSES</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {renderProducts()}
      </div>
    </Layout>
  );
}

//const URL = "http://localhost:3000/api/products"
const URL = `${process.env.NEXT_PUBLIC_HOST}/api/products`;

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(URL);
  return {
    props: {
      products,
    },
  };
};

export default HomePage;
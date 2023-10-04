import Layout from "@/components/Layout";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

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

  const Down=()=>{
    // Desplazar la página al final
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Layout>
      <div>
        <h1 className="mb-8 text-2xl font-bold tracking-tight text-gray-800 dark:text-white text-center mt-8">
          ALL EXPENSES
        </h1>
        <button className="dark:text-gray-400 italic underline hover:text-teal-400 text-2xl" onClick={Down}>Down</button>
      </div>
      <Link legacyBehavior href="/filter">
        <a className="dark:text-gray-400 italic underline hover:text-teal-400 text-2xl">
          Search by id
        </a>
      </Link>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mt-4">
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

import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

function ProductPage({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    await axios.delete("/api/products/" + id);

    router.push("/home");
    alert("Product " + id + " deleted successfuly");
  };

  return (
    <Layout> 
      <div className="container mx-auto max-w-sm  bg-gray-800 border border-gray-200 shadow-md p-3 mt-5">
        <div className="m-4 text-white ">
          <h1>{product.name}</h1>          
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
        <div className="flex flex-row space-x-4 justify-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-2 py-2 rounded"
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-400 ml-2 text-white px-3 py-2 rounded"
            onClick={() => router.push("/products/edit/" + product.id)}
          >
            Edit
          </button>
        </div>      
      </div>               
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: product } = await axios.get(
    //"http://localhost:3000/api/products/" + context.query.id
    `${process.env.NEXT_PUBLIC_HOST}/api/products/` + context.query.id
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;

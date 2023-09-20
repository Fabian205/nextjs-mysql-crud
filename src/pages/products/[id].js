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
        {/* <div className="m-4 text-white ">
          <h1 className="text-2xl">Id: {product.id}</h1> 
          <p>Account: {product.name}</p>       
          <p>Value: {product.price}</p>
          <p>Description: {product.description}</p>
        </div> */}
        <div className="bg-gray-800 border border-gray-200 shadow-md p-3">
          <div className="flex flex-row space-x-4">
            <h1 className="text-indigo-500">Id :</h1>
            <h2 className="text-white">{product.id}</h2>
          </div>
          <div className="flex flex-row space-x-4">
            <h1 className="text-indigo-500">Account :</h1>
            <h2 className="text-white">{product.name}</h2>
          </div>
          <div className="flex flex-row space-x-4">
            <p className="text-indigo-500">Income:</p>
            <p className="ml-3 text-white">{product.income}</p>
          </div>
          <div className="flex flex-row space-x-4">
            <p className="text-indigo-500">Spend :</p>
            <p className="text-white">{product.price}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-indigo-500">Description :</p>
            <p className="text-white">{product.description}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-indigo-500">Date :</p>
            <p className="text-white">{product.date}</p>
          </div>
        </div>
        <div className="flex flex-row space-x-4 justify-center mt-5">
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

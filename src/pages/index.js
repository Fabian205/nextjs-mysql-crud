import Layout from "@/components/Layout";
import { useRouter } from "next/router";


function Index() {
  const router = useRouter();
  const Register = () => {
    router.push("/register");
  };

  return (
    <Layout>
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white text-center mt-8">DIALY EXPENSES</h1>
      {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-4 mt-12">  */}
      <div className="container mx-auto mt-8 max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="misgastos.jpeg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Software for recording and controlling income and expenses
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Computer system for the control and administration of Residential
            Complexes
          </p>
          <button
            onClick={Register}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Register
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Index;

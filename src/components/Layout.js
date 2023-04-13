import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./Navbar";

export function Layout({ children }) {
  const router = useRouter();

  const New = () => {
    router.push("/new");
  };
  
  return (
    <>
      <h1>
        <Navbar />
      </h1>
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 mb-5 rounded"
        onClick={New}
      >
        New
      </button> */}
      <div className="bg-gray-100 h-screen p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Layout;

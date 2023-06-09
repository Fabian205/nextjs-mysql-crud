import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./Navbar";

export function Layout({ children }) {
  const router = useRouter();
  //new funcionará con navbar
  const New = () => {
    router.push("/new");
  };

  return (
    <>
      <h1>
        <Navbar />
      </h1>
      {/*  max-w(width) sm, lg, md */}
      <div className="bg-gray-700 h-screen flex justify-center">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <ToastContainer />     
    </>
  );
}

export default Layout;

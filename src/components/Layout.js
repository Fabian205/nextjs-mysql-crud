import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./Navbar";
import Footer from "./Footer";


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
      <div className=" h-screen flex justify-center bg-gray-700 overflow-x-auto">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <h1>
        <Footer/>
      </h1>
      
      <ToastContainer />     
    </>
  );
}

export default Layout;


/* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll; */
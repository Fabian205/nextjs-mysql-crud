import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import axiosInstance from "../../axiosInstance";



export default function Logout(req, res) { 
  
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const response = await axios.post("api/auth/signout");
    if (response.status === 200) {
      router.push("/login");
    } */
    await axiosInstance
    .post("api/auth/signout")
    .then((response) => {
      // Manejar la respuesta exitosa
      router.push("/login");
      //console.log(response.data);
    })
    .catch((error) => {
      // El error 401 será interceptado y manejado de manera personalizada
      console.error(error);
    });
  };

  const back = () => {
    router.push("/home");
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-sm  bg-gray-800 rounded-lg shadow-md p-6 m-10 ">
        <form
          onSubmit={handleSubmit}
          className=" shadow-md rounded px-8 p-8 m-4 "
        >
          <div className="container flex justify-center">
            <button className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mb-4"
            >              
              Logout
            </button>
          </div>
        </form>
        <div>
          <button
            className="bg-red-600 text-white rounded py-2 px-4 hover:bg-red-800 mb-4"
            onClick={back}
          >
            Cancel
          </button>
        </div>
      </div>
    </Layout>
  );
}

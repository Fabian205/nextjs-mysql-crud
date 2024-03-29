import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import axiosInstance from "../../axiosInstance";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputName = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearInput = () => {
    setCredentials({
      email: "",
      password: "",
    });
    inputName.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const response = await axios.post("api/auth/signin", credentials);
    if (response.status === 200) {
      router.push("/home");
    }
    console.log("response de login", response); */

    await axiosInstance
    .post("api/auth/signin", credentials)
    .then((response) => {
      // Manejar la respuesta exitosa
      router.push("/home");
      //console.log(response.data);
    })
    .catch((error) => {
      // El error 401 será interceptado y manejado de manera personalizada
      console.error(error);
      handleClearInput();
    });
  };

  return (
    <Layout>   
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-6 mt-10 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
          Login
        </h2>
        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-medium text-gray-400 mb-1"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              //placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              ref={inputName}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-medium text-gray-400 mb-1"
            >
              Password:
            </label>
            <div 
            className="relative"            
            >
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                //placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
                required
              />
              <button
              type="button" 
              onClick={togglePasswordVisibility}  
              className="absolute top-1/2 right-3 transform -translate-y-1/2"            
              >
                <img
                  src={showPassword ? "/password.png" : "/showpass.png"}
                  alt="Toggle Password"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
          <div>
            <button 
            type="submit"
            className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mb-4">
              Login
            </button>
            <p className="text-teal-600 italic">
              {"Don't Have an Account? "}
              <Link legacyBehavior href="/register">
                <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                  Register
                </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}

import React from "react";
import Layout from "@/components/Layout";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../axiosInstance";
import Table from "@/components/table";
import Link from "next/link";

function ConsultaPagos() {
  const [data, setData] = useState([]);

  const [period, setPeriod] = useState({
    cuenta: "",
    f_ini: "2023-09-01",
    f_fin: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setPeriod({
      ...period,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearInput = () => {
    setPeriod({
      cuenta: "Select an account",
      f_ini: "",
      f_fin: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const response = await axios.post("api/auth/signin", credentials);
    if (response.status === 200) {
      router.push("/home");
    }
    console.log("response de login", response); */

    await axiosInstance
      .post("api/inquiries/pays", period)
      .then((response) => {
        // Manejar la respuesta exitosa
        //console.log(response.data);
        setData(response.data);
        //router.push("/home");
      })
      .catch((error) => {
        // El error 401 será interceptado y manejado de manera personalizada
        console.error(error);
        //handleClearInput();
      });
  };

  const scrollToTop = () => {
    document.querySelector("#down").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-6 mt-10 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
          Payments inquiry
        </h2>
        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="cuenta"
              className="block font-medium text-gray-400 mb-1"
            >
              Account:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-300"
              name="cuenta"
              id="cuenta"
              value={period.cuenta}
              onChange={handleChange}
            >
              <option color="blue" value="seleccion" defaultValue>
                Select an account
              </option>
              <option color="yellow" value="Pama">
                Pama
              </option>
              <option color="yellow" value="Rp">
                Rp
              </option>
              <option color="green" value="Casa 2 Valle">
                Casa 2 Valle
              </option>
              <option color="gray" value="Internal transfer">
                Internal transfer
              </option>
              <option color="magenta" value="Cash Rp">
                Adjustment expenses
              </option>
              <option color="magenta" value="Cash Pa">
                Income adjustment
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="f_ini"
              className="block font-medium text-gray-400 mb-1"
            >
              Since:
            </label>
            <div className="relative">
              <input
                type="date"
                name="f_ini"
                id="f_ini"
                value={period.f_ini}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="f_fin"
              className="block font-medium text-gray-400 mb-1"
            >
              Until:
            </label>
            <div className="relative">
              <input
                type="date"
                name="f_fin"
                id="f_fin"
                value={period.f_fin}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
                required
              />
            </div>
          </div>
          <div className="flex flex-row space-x-4 justify-center mt-5">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mb-4"
            >
              Report
            </button>
            <button
              className="bg-blue-600 text-white  rounded py-2 px-4 hover:bg-gray-400 mb-4"
              onClick={() => router.push("/reports")}
            >
              Return
            </button>
          </div>
        </form>
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <h1 className="text-indigo-700">Dates obtained:</h1>
          </div>
        </form>
      </div>
      <div>
        <div className="scroll-smooth">
          <button
            id="down"
            className="dark:text-gray-400 italic underline hover:text-teal-400 text-xl"
            onClick={scrollToBottom}
          >
            Down
          </button>
        </div>
        <form>
          <div className="mt-3 mb-3">
            <Table data={data} />
          </div>
        </form>
        <div className="scroll-smooth">
          <button
            id="top"
            className="dark:text-gray-400 italic underline hover:text-teal-400 text-xl mb-3"
            onClick={scrollToTop}
          >
            Top
          </button>
        </div>
        <Link legacyBehavior href="/filter">
          <a className="dark:text-gray-400 italic underline hover:text-teal-400 text-xl pb-3">
            Search by id
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export default ConsultaPagos;

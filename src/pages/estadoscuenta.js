import React from "react";
import Layout from "@/components/Layout";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../axiosInstance";

function EstadosCuenta() {
  const [datos, setDatos] = useState(" ");

  const [period, setPeriod] = useState({
    name: "",
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
      name: "Select an account",
      f_ini: "2023-09-01",
      //f_fin: "",
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
      .post("api/inquiries/accounts", period)
      .then((response) => {
        // Manejar la respuesta exitosa
        //router.push("/home");
        //console.log(response.data);
        setDatos(response.data);
        //console.log(datos);
      })
      .catch((error) => {
        // El error 401 será interceptado y manejado de manera personalizada
        console.error(error);
      });
    handleClearInput();
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-6 mt-10 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
          Account statements
        </h2>
        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-medium text-gray-400 mb-1"
            >
              Way to pay:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-300"
              name="name"
              id="name"
              value={period.name}
              onChange={handleChange}
            >
              <option color="blue" value="seleccion" defaultValue>
                Select an account
              </option>
              <option color="yellow" value="SavAccount Bp-Rp">
                SavAccount Bp-Rp
              </option>
              <option color="yellow" value="CurAccount Bp-Rp">
                CurAccount Bp-Rp
              </option>
              <option color="yellow" value="Recarga Deuna Bp-Rp">
                Recarga Deuna Bp-Rp
              </option>
              <option color="green" value="SavAccount Cacpn-Rp">
                SavAccount Cacpn-Rp
              </option>
              <option color="gray" value="SavAccount Bp-Pa">
                SavAccount Bp-Pa
              </option>
              <option color="magenta" value="SavAccount BPacificRp">
                SavAccount BPacificRp
              </option>
              <option color="magenta" value="Credit Card Rp">
                Credit Card Rp
              </option>
              <option color="magenta" value="Cash Rp">
                Cash Rp
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
            <h1 className="text-indigo-700">Current balance:</h1>
          </div>
          <div>
            <p className="bg-green-700 text-white">{datos}</p>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default EstadosCuenta;

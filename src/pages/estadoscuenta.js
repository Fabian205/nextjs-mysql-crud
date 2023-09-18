import React from "react";
import Layout from "@/components/Layout";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../axiosInstance";

function EstadosCuenta() {
  /* const inputName = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, []);  */

  const [period, setPeriod] = useState({
    name: "",
    f_ini: "",
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
      f_ini: "",
      f_fin: "",
    });
    //inputName.current.focus();
  };

  /* const reporte = async () => {
    console.log(period.name, period.f_ini, period.f_fin);
    alert("report here" + period.name + period.f_ini + period.f_fin);    
    const response = await fetch(url)
    const result = await response.json();
    console.log(result)
    let url = "http://10.0.2.2:80/api/ReportePHPPedregal.php?CASA=";
    Linking.openURL(url + output + '&FECHA_INI=' + text + '&FECHA_FIN=' + textff); 
  }; */

  const handleSubmit = async (e) => {
    //alert("report here" + period.name + period.f_ini + period.f_fin);
    e.preventDefault();
    /* const response = await axios.post("api/auth/signin", credentials);
    if (response.status === 200) {
      router.push("/home");
    }
    console.log("response de login", response); */

    await axiosInstance
      .post("api/auth/accounts", period)
      .then((response) => {
        // Manejar la respuesta exitosa
        router.push("/home");
        //console.log(response.data);
        alert("The account balance is:" + response.data);
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
          Estados de Cuenta
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
              Cuenta:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-300"
              name="name"
              id="name"
              //ref={inputName}
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
              <option color="green" value="SavAccount Cacpn-Rp">
                SavAccount Cacpn-Rp
              </option>
              <option color="gray" value="SavAccount Bp-Pa">
                SavAccount Bp-Pa
              </option>
              <option color="magenta" value="Cash Rp">
                Cash Rp
              </option>
              <option color="magenta" value="Cash Pa">
                Cash Pa
              </option>
            </select>
            {/* <input
              type="text"
              id="name"
              name="name"
              autoComplete="on"
              placeholder="Elija la cuenta"
              value={credentials.email}
              onChange={handleChange}
              ref={inputName}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
              required
            /> */}
          </div>

          <div className="mb-4">
            <label
              htmlFor="f_ini"
              className="block font-medium text-gray-400 mb-1"
            >
              Fecha de inicio:
            </label>
            <div className="relative">
              <input
                //type={showPassword ? 'text' : 'password'}
                type="date"
                name="f_ini"
                id="f_ini"
                //placeholder="Password"
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
              Fecha final:
            </label>
            <div className="relative">
              <input
                //type={showPassword ? 'text' : 'password'}
                type="date"
                name="f_fin"
                id="f_fin"
                //placeholder="Password"
                value={period.f_fin}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              //onClick={reporte}
              className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mb-4"
            >
              Report
            </button>
            {/* <p className="text-teal-600 italic">
            {"Don't Have an Account? "}
            <Link legacyBehavior href="/register">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Register
              </a>
            </Link>
          </p> */}
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default EstadosCuenta;

import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

function Filter() {
  const [id, setId] = useState("");

  const inputName = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const router = useRouter();

  const handleSubmit = () => {
    alert(id);
  };

  const back = () => {
    router.push("/reports");
  };

  const home = () => {
    router.push("/home");
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-sm  bg-gray-800 rounded-lg shadow-md p-6 m-10 ">
        <form
          onSubmit={handleSubmit}
          className=" shadow-md rounded px-8 p-8 m-4 "
        >
          <div>
            <label
              htmlFor="filtro"
              className="block font-medium text-gray-400 mb-1"
            >
              Id a filtrar:
            </label>
            <input
              type="text"
              id="filtro"
              name="filtro"
              autoComplete="on"
              value={id}
              onChange={handleChange}
              ref={inputName}
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
              required
            />
          </div>
          <Link legacyBehavior href={`/products/${id}`} key={id}>
            <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
              Search
            </a>
          </Link>
        </form>
        <div className="flex flex-row">
          <div>
          <button
            className="bg-red-600 text-white rounded py-2 px-4 hover:bg-red-800 mb-4 mr-8"
            onClick={back}
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mb-4 mr-8"
            onClick={home}
          >
            Home
          </button>
        </div>
        </div>        
      </div>
    </Layout>
  );
}

export default Filter;

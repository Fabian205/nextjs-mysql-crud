import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    date: "",
    income: "",
    price: "",
    cuenta: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //toast.success no trabaja cuando se rutea la page
    try {
      if (router.query.id) {
        await axios.put("/api/products/" + router.query.id, product);
        //toast.success("Product updated successfully");
        alert("Product updated successfully");
      } else {
        await axios.post("/api/products", product);
        //toast.success("Product created successfully");
        alert("Product created successfully");
      }
      router.push("/new");
    } catch (error) {
      //toast.error(error.response.data.message);
      alert(error.response.data.message);
    }
    clearText();
  };
//COLOCAR RADIO BUTTON USUARIO ELIGE ENTRE IR A HOME O QUEDARSE EN NEW Y LIMPIAR
  const clearText = () => {
    setProduct({
      name: "",
      description: "",
      date: "",
      income: "",
      price: "",
      cuenta: "Select an account",
    });
  };

  const handleChange = ({ target: { name, value } }) =>
    setProduct({ ...product, [name]: value });

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("/api/products/" + router.query.id);
      setProduct(data);
    };

    if (router.query.id) {
      getProduct(router.query.id);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto rounded-lg bg-gray-800 p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
        Movement record
      </h2>
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-3">
          <label
            htmlFor="cuenta"
            className="block text-gray-400 text-sm text-bold mb-2"
          >
            Account:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-300"
            name="cuenta"
            id="cuenta"
            value={product.cuenta}
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
            <option color="magenta" value="Adjustment expenses">
              Adjustment expenses
            </option>
            <option color="magenta" value="Income adjustment">
              Income adjustment
            </option>
          </select>
        </div>

        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-gray-400 text-sm text-bold mb-2"
          >
            Way to pay:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-300"
            name="name"
            id="name"
            value={product.name}
            onChange={handleChange}
          >
            <option color="blue" value="seleccion" defaultValue>
              Select a way to pay
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
        </div>

        <div className="mb-3">
          <label
            htmlFor="income"
            className="block text-gray-400 text-sm text-bold mb-2"
          >
            Income:
          </label>
          <input
            type="text"
            name="income"
            id="income"
            placeholder="0.00"
            pattern="[0-9]{1,}\.[0-9]{1,}"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
            value={product.income}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="price"
            className="block text-gray-400 text-sm text-bold mb-2"
          >
            Spent:
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="0.00"
            pattern="[0-9]{1,}\.[0-9]{1,}"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
            value={product.price}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="date"
            className="block text-gray-400 text-sm text-bold mb-2"
          >
            Date:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="date"
            pattern="[0-9]{1,}\.[0-9]{1,}"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
            value={product.date}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="description"
            className="block text-gray-400 text-sm text-bold mb-2"
          >
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            rows="5"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
            value={product.description}
          ></textarea>
        </div>
        <button className="bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded focus:outline-none focus: shadow-outline font-bold text-white">
          {router.query.id ? "Update Record" : "Save Record"}
        </button>
      </form>
    </div>
  );
}

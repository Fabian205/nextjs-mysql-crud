import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
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
      router.push("/home");
    } catch (error) {
      //toast.error(error.response.data.message);
      alert(error.response.data.message)
    }
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
      <h2 className="text-2xl font-bold mb-6 text-center">
          Expense record
        </h2>
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-3">
        <label htmlFor="name" className="block text-indigo-500 text-sm text-bold mb-2">Cuenta:</label>
        <select 
        
        className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline"
        name="name"
        id="name"       
        value={product.name}
        onChange={handleChange}       
        >
          <option color="blue" value="seleccion" defaultValue>Seleccione la cuenta</option>
          <option color="yellow" value="Cta_Cte_Bp-Rp">Cta_Cte_Bp-Rp</option>
          <option color="yellow" value="Cta_Aho_Bp-Rp">Cta_Aho_Bp-Rp</option>
          <option color="green" value="Cta_Aho_Cacpn-Rp">Cta_Aho_Cacpn-Rp</option>
          <option color ="gray" value="Cta_Pa">Cta_Pa</option>
          <option color="magenta" value="Cta_Lou">Cta_Lou</option>
          <option value="Efectivo">Efectivo</option>
        </select>
        </div>

        <div className="mb-3">
        <label htmlFor="price" className="block text-indigo-500 text-sm text-bold mb-2">Valor:</label>
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
        <label htmlFor="description" className="block text-indigo-500 text-sm text-bold mb-2">Concepto:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Concepto"
          rows="5"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
          value={product.description}
        ></textarea>
        </div>
        <button className="bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded focus:outline-none focus: shadow-outline font-bold text-white">
          {router.query.id ? "Update Product" : "Save Product"}
        </button>
      </form>
    </div>
  );
}

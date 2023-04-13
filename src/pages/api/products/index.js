import { pool } from "@/config/db";

export default async function handler(req, res) {
  //console.log(req.method);
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
  }
}

const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM product");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  const { name, description, price } = req.body;
  console.log(price);
  try {
    const [result] = await pool.query("INSERT INTO product SET ?", {
      name,
      description,
      price,
    });

    return res
      .status(200)
      .json({ name, description, price, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

import { pool } from "@/config/db";

export default async function handlePays(req, res) {
  const { name, f_ini, f_fin } = req.body;
  //console.log(name, f_ini, f_fin)

  try {
    const [result] = await pool.query("SELECT id, price, date, description FROM product WHERE name ='" + name + "' AND date >= '" + f_ini + "' AND date <= '" + f_fin + "' AND price != '"+ 0 +"'  ");

    //console.log(result)
    return res
      .status(200)
      //.json(balanceDbRed);
      .json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
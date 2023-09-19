import { pool } from "@/config/db";

export default async function handleAccount(req, res) {
  const { name, f_ini, f_fin } = req.body;
  //console.log(name, f_ini, f_fin)

  try {
    //const [result] = await pool.query("SELECT income, date FROM product WHERE name ='" + name + "' AND date >= '" + f_ini + "' AND date <= '" + f_fin + "' AND income != '"+ 0 +"'  ");

    //const [result] = await pool.query("SELECT income, date, description FROM product WHERE name ='" + name + "' AND date >= '" + f_ini + "' AND date <= '" + f_fin + "'");

    const [result] = await pool.query("SELECT SUM(income) AS Ingresos, SUM(price) AS Gastos FROM product WHERE name ='" + name + "' AND date >= '" + f_ini + "' AND date <= '" + f_fin + "'");

    const ingresosDb = result[0].Ingresos
    const gastosDb = result[0].Gastos
    const balanceDb= ingresosDb-gastosDb
    const balanceDbRed= balanceDb.toFixed(2)

    //console.log(ingresosDb, gastosDb, balanceDb);
    //console.log(result)
    return res
      .status(200)
      .json(balanceDbRed);
      //.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//"SELECT email, password FROM users WHERE email = '" + email + "' AND password = '" + password + "'"
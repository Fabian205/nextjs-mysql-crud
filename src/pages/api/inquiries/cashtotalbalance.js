import { pool } from "@/config/db";

export default async function handleCashTotalBalance(req, res) {
  const { f_ini, f_fin } = req.body;

  try {
    const [result] = await pool.query("SELECT SUM(income) AS Ingresos, SUM(price) AS Gastos, SUM(income-price) AS Saldo FROM product WHERE name LIKE '%Cash%' AND date >= '" + f_ini + "' AND date <= '" + f_fin + "'");

    const saldoDb = result[0].Saldo
    //const saldoDbRed=saldoDb.toFixed(2)

    //console.log(saldoDb);
    //console.log(result)
    return res
      .status(200)
      .json(saldoDb);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
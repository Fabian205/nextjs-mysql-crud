import { pool } from "@/config/db";

export default async function handleRegister(req, res) {
  const { email, password } = req.body;

  try {
    const [result] = await pool.query("INSERT INTO users SET ?", {
      email,
      password,
    });
    return res
      .status(200)
      .json({ email, password, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

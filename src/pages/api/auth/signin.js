import { pool } from "@/config/db";
import { serialize } from "cookie";

export default async function signinHandler(req, res) {
  const { email, password } = req.body;
  const jwt = require("jsonwebtoken");

  // check if email and password are valid
  try {
    const [result] = await pool.query(
      "SELECT email, password FROM users WHERE email = '" +
        email +
        "' AND password = '" +
        password +
        "'"
    );
    const bdemail = result[0].email;
    const bdpassword = result[0].password;

    if (email === bdemail && password === bdpassword) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
          email: email,
          username: "nobasys",
        },
        "secret"
      );
      const serialized = serialize("myTokenName", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialized);
      return res.status(200).json("login successfully");     
    }
    return res.status(401).json({ error: "Invalid email or password" });
  } catch (error) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
}

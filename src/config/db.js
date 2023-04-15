//Config para subir a railway
import { createPool } from "mysql2/promise";
import { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } from "./config.js";

export const pool = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database:DB_NAME
})

//url generated for railway deploy
//nextjs-mysql-crud-production.up.railway.app

//original local connection
/* import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "nobasys2411",
  port: 3306,
  database: "productsdb",
});
console.log("conection ready");
export { pool }; */

// connection with planetScale
/* import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "ymevsyxb4mlpibdissiv",
  password: "pscale_pw_Iq3gkSJxzGPPlFdi26T5nc9ZFPTlResB8uIYxAojMfh",
  //port: 3306,
  database: "productsdb",
  ssl: {
    rejectUnauthorized: false
  }
});
console.log("conection ready");
export { pool }; */
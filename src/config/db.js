// connection with planetScale
import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "aws.connect.psdb.cloud",
  user: "d4m5u5dtjdhqpdsn139p",
  password: "pscale_pw_BpbjBqVxzmFbP5wwIi9aG3Bo0EOoTLamU2ComyUelJa",
  //port: 3306,
  database: "productsdb",
  ssl: {
    rejectUnauthorized: false
  }
});
console.log("conection ready");
export { pool };




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
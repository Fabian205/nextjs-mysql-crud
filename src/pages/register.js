import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Register() {
  const inputName = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearInput = () => {
    setCredentials({
      email: "",
      password: "",
      confirmPassword: "",
    });
    inputName.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (credentials.password === credentials.confirmPassword) {
        const response = await axios.post("api/auth/register", credentials);
        if (response.status === 200) {
          alert("User created successfully");
          router.push("/login");
        }        
      } else {
        alert("Key does not match, try again!");
        handleClearInput();
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-6 mt-10 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">Register</h2>
        <form
          onSubmit={handleSubmit}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-400 mb-1">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="Email"
              value={credentials.email}
              ref={inputName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-gray-400 mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              //ref={inputPass}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block font-medium text-gray-400 mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              value={credentials.confirmPassword}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:sahdow-outline"
              required
            />
          </div>
          <div>
            <button className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-800 mb-4">
              Register
            </button>
            {/* <p className="text-teal-600 italic">
              Don't Have an Account?{" "}
              <a href="/register" className="dark:text-gray-800 italic">
                Register
              </a>
            </p> */}
          </div>
        </form>
      </div>
    </Layout>
  );
}

/* import { useState } from 'react';


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); 
    try {
      const [rows] = await pool.query('SELECT COUNT(*) as count FROM users WHERE email = ?', [email]);
      const { count } = rows[0];

      if (count > 0) {
        console.log('El nombre de usuario ya está en uso');
        return;
      }

      await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);

      console.log('Registro exitoso');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error al registrar', error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
} */

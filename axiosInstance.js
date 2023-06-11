import axios from 'axios';

// Crear una instancia de Axios
const axiosInstance = axios.create();

// Configurar el interceptor de respuesta
axiosInstance.interceptors.response.use(
  response => response,  // Devolver la respuesta sin cambios si no hay error
  error => {
    if (error.response && error.response.status === 401) {
      // Personalizar el manejo del error 401 aquí
      // Por ejemplo, mostrar un mensaje de error o redireccionar a una página de inicio de sesión
      console.log('Error 401: Not authorized');
      alert('Error 401: Not authorized, Invalid username and/or password, try again');
      
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;


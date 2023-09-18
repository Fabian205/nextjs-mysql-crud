import Layout from "@/components/Layout";
import Link from "next/link";

function Reports() {
  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-6 mt-10 ">
        <h2 className="text-2xl font-bold mb-10 pt-10 text-center text-gray-400">
          Reports
        </h2>
        <form
          className="shadow-md rounded px-8 pb-8 mb-4"
        >
          <div className="flex flex-col">
            <Link legacyBehavior href="/estadoscuenta">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Estado de Cuenta
              </a>
            </Link>
            <Link legacyBehavior href="/admin/consultapagosadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Consulta de Pagos
              </a>
            </Link>
            <Link legacyBehavior href="/admin/consultaexpensasadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Consulta de Expensas
              </a>
            </Link>
            <Link legacyBehavior href="/admin/consultahistorialadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Consulta Historial
              </a>
            </Link>
            <Link legacyBehavior href="/admin/estadocuentageneraladmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Estado de Cuenta General
              </a>
            </Link>
            <Link legacyBehavior href="/admin/registroexpensasadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Registro de Expensas
              </a>
            </Link>
            <Link legacyBehavior href="/admin/edicionexpensasadmin">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Edición de Expensas
              </a>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Reports;
import Layout from "@/components/Layout";
import Link from "next/link";

function Reports() {
  return (
    <Layout>
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-md p-6 mt-10 ">
        <h2 className="text-2xl font-bold mb-10 pt-10 text-center text-gray-400">
          Reports
        </h2>
        <form className="shadow-md rounded px-8 pb-8 mb-4">
          <div className="flex flex-col">
            <Link legacyBehavior href="/estadoscuenta">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Account statements
              </a>
            </Link>
            <Link legacyBehavior href="/estadoscuentatabla">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
              Detailed account statements
              </a>
            </Link>
            <Link legacyBehavior href="/consultapagos">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Payments inquiry
              </a>
            </Link>
            <Link legacyBehavior href="/consultaingresos">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Incomes inquiry
              </a>
            </Link>
            <Link legacyBehavior href="/filter">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Filter
              </a>
            </Link>
            <Link legacyBehavior href="/totalgastos">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Expens total
              </a>
            </Link>
            <Link legacyBehavior href="/totalingresos">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Incomes total
              </a>
            </Link>
            <Link legacyBehavior href="/gastosporcuenta">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Expenses by account
              </a>
            </Link>
            <Link legacyBehavior href="/gastospordescripcion">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Expenses by description
              </a>
            </Link>
            <Link legacyBehavior href="/cashtotalbalance">
              <a className="dark:text-gray-400 italic underline hover:text-teal-400 ">
                Cash total balance
              </a>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Reports;

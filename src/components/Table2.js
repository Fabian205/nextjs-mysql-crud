import React from "react";

function Table2({ data }) {
  //item.price viene del data como texto para cambiar a numero uso la propiedad Number de js
  const sumaPrice = () => {
    const elementosASumar = data.map((item) => Number(item.price));
    const suma = elementosASumar.reduce((total, item) => total + item, 0);
    return suma.toFixed(2);
  };

  const sumaIncome = () => {
    const elementosASumar = data.map((item) => Number(item.income));
    const suma = elementosASumar.reduce((total, item) => total + item, 0);
    return suma.toFixed(2);
  };

  const saldo = () => {
    const sumaIncomes = data.map((item) => Number(item.income));
    const income = sumaIncomes.reduce((total, item) => total + item, 0);
    const sumaSpends = data.map((item) => Number(item.price));
    const spend = sumaSpends.reduce((total, item) => total + item, 0);
    const saldo = income - spend;
    return saldo.toFixed(2);
  };

  return (
    <div>
      <div className="mb-4 dark: text-gray-900">
        <p className="mt-4 text-xl italic dark:text-gray-400">Total Incomes: {sumaIncome()}</p>
        <p className="mt-4 text-xl italic dark:text-gray-400">Total Spends: {sumaPrice()}</p>
        <p className="mt-4 text-xl italic dark: text-teal-400">Saldo: {saldo()}</p>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Spend
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Income
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Account
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.income}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Table2;

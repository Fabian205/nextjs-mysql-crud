import Link from "next/link";

export function ProductCard({ product }) {
  return (
    <Link legacyBehavior href={`/products/${product.id}`} key={product.id}>
      <a>
        <div className="bg-gray-800 border border-gray-200 shadow-md p-3">
          <div className="flex flex-row space-x-4">
            <h1 className="text-indigo-500">Cuenta :</h1>
            <h2 className="text-white">{product.name}</h2>
          </div>
          {/* <div className="flex flex-col">
            <p className="text-indigo-500">Price:</p>
            <p className="ml-3">{product.price}</p>
          </div> */}
          <div className="flex flex-row space-x-4">
            <p className="text-indigo-500">Valor :</p>
            <p className="text-white">{product.price}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-indigo-500">Concepto :</p>
            <p className="ml-3 text-white">{product.description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

import Link from "next/link";

export function ProductCard({ product }) {
  return (
    <Link legacyBehavior href={`/products/${product.id}`} key={product.id}>
      <a>
        <div className="border border-gray-200 shadow-md p-6">
          <div className="flex flex-row space-x-4">
            <h1 className="text-indigo-500">Account:</h1>
            <h2>{product.name}</h2>
          </div>

          <div className="flex flex-row space-x-4">
            <p className="text-indigo-500">Description:</p>
            <p>{product.description}</p>
          </div>

          {/* <div className="flex flex-col">
            <p className="text-indigo-500">Price:</p>
            <p className="ml-3">{product.price}</p>
          </div> */}

          <div className="flex flex-row space-x-4">
            <p className="text-indigo-500">Price:</p>
            <p>{product.price}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition duration-300 p-4 cursor-pointer group"
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          className="h-40 object-contain mx-auto group-hover:scale-105 transition duration-300"
        />
      </div>

      <h2 className="mt-4 text-sm font-medium line-clamp-2 text-gray-800 dark:text-gray-200">
        {product.title}
      </h2>

      <p className="text-lg font-bold mt-2 text-black dark:text-white">
        ${product.price}
      </p>
    </div>
  );
}

export default ProductCard;
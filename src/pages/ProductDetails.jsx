import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  const handleAddToCart = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/login");
      return;
    }

    addToCart(product);
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-10 items-center">
      <img
        src={product.image}
        loading="lazy"
        className="h-80 object-contain mx-auto"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-500 mt-2">{product.description}</p>
        <p className="text-xl font-bold mt-4">${product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-4 bg-black text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
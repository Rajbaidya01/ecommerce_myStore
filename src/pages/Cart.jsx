import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          Your cart is empty 😔
        </p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition mb-5"
            >
              {/* Image */}
              <img
                src={item.image}
                className="w-24 h-24 object-contain"
              />

              {/* Info */}
              <div className="flex-1">
                <h2 className="font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-lg font-bold mt-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300"
                  >
                    −
                  </button>

                  <span className="font-medium">{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Card */}
          <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-right">
            <h2 className="text-2xl font-bold">
              Total: <span className="text-green-600">${total}</span>
            </h2>

            <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:opacity-80 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
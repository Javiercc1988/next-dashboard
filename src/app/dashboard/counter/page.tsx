import { CartCounter } from "@/shopping-cart/components/cart-counter/CartCounter";

export const metadata = {
  title: "Shopping card",
  description: "Un simple contador de compra",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter value={20} />
    </div>
  );
}

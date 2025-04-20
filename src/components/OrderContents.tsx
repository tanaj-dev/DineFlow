import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderContentsProps = {
  order: OrderItem[];
  removeItems: (id: number) => void;
};

export default function OrderContents({
  order,
  removeItems,
}: OrderContentsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-gray-200">
        🍜 Your Order
      </h2>
      <div className="space-y-3 mt-6">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-100 pb-3"
          >
            <div>
              <p className="font-medium text-gray-700">{item.name}</p>
              <p className="text-sm text-gray-500">
                {formatCurrency(item.price)} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeItems(item.id)}
              className="bg-red-100 text-red-600 p-2 rounded-full hover:bg-red-200 transition-colors"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

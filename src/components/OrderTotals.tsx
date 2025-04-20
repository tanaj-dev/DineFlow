import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">
          Payment Summary
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span className="font-medium">Subtotal:</span>
            <span className="font-semibold text-gray-700">
              {formatCurrency(subtotalAmount)}
            </span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span className="font-medium">Tip ({Math.round(tip * 100)}%):</span>
            <span className="font-semibold text-teal-600">
              +{formatCurrency(tipAmount)}
            </span>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-baseline">
              <span className="text-lg font-semibold text-gray-700">
                Total:
              </span>
              <span className="text-2xl font-bold text-teal-700 bg-teal-50 px-4 py-2 rounded-xl">
                {formatCurrency(totalAmount)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Botón fijo al final sin sticky */}
      <div className="mt-8 pt-4 border-t border-gray-100">
        <button
          className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-lg
          transition-colors duration-300 disabled:opacity-10 focus:outline-none focus:ring-2
          focus:ring-teal-700 focus:ring-offset-2 uppercase"
          disabled={totalAmount === 0}
          onClick={placeOrder}
        >
          Save Order
        </button>
      </div>
    </div>
  );
}

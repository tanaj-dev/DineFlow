import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  // function to add items
  const addItem = (item: MenuItem) => {
    // console.log("Adding...");
    // console.log(item);

    // Check if a Item Already Exists
    const itemExists = order.find((orderItem) => orderItem.id === item.id);
    if (itemExists) {
      // console.log("It item already exists");
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      // Writing in the State of the Orders
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  // function to remove items
  const removeItems = (id: MenuItem["id"]) => {
    // console.log("Removing...", id);
    setOrder(order.filter((item) => item.id !== id));
  };

  // function to save the order
  const placeOrder = () => {
    // console.log('Saving...');
    setOrder([]);
    setTip(0);
  };

  // console.log(order);

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItems,
    placeOrder,
  };
}

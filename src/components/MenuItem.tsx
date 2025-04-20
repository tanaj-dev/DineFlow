import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="w-full flex justify-between items-center p-4 
        bg-white hover:bg-gray-50 rounded-xl border-2 border-gray-100
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50
        active:scale-95 group"
      onClick={() => addItem(item)}
    >
      <span className="text-lg font-medium text-gray-700 group-hover:text-teal-800">
        {item.name}
      </span>
      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full 
        text-sm font-semibold shadow-sm">
        ${item.price}
      </span>
    </button>
  );
}
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removeItems, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-gradient-to-r from-teal-700 to-teal-600 py-8 shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-white tracking-tighter drop-shadow-md">
            Restaurant Calculator
            <span className="block text-lg font-normal mt-3 opacity-95">
              Dining Experience Manager
            </span>
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto min-h-screen py-12 md:py-16 grid md:grid-cols-2 gap-8 px-4 lg:px-8 bg-gray-50 rounded-t-3xl -mt-8 shadow-sm">
        {/* Menú Section (Sin cambios) */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-[calc(100vh-180px)] overflow-y-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-gray-200 sticky top-0 bg-white">
            🍽️ Our Menu
          </h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        {/* Order Section - Validación en el Padre */}
        <div className="flex flex-col h-[calc(100vh-180px)]">
          {order.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center text-gray-500">
              <p className="text-lg">
                🍽️ Add items from the menu to start an order.
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1">
                <OrderContents order={order} removeItems={removeItems} />
                <TipPercentageForm setTip={setTip} tip={tip} />
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mt-4">
                <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;

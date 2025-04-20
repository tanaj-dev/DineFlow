import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
];

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  const [customTip, setCustomTip] = useState("");

  // ✅ Este useEffect resetea el customTip cuando el tip se reinicia a 0 desde el padre
  useEffect(() => {
    if (tip === 0) {
      setCustomTip("");
    }
  }, [tip]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">
        Select Tip Percentage
      </h3>

      {/* ✅ Sección de botones e input envueltos en una etiqueta <form> */}
      <form>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {tipOptions.map((tipOption) => (
            <button
              key={tipOption.id}
              type="button"
              onClick={() => {
                setTip(tipOption.value);
                setCustomTip("");
              }}
              className={`p-3 rounded-xl text-sm font-semibold transition-all
              ${
                tip === tipOption.value
                  ? "bg-teal-700 text-white shadow-lg"
                  : "bg-gray-50 text-gray-500 hover:bg-teal-100 hover:text-teal-800"
              }`}
            >
              {tipOption.label}
            </button>
          ))}

          <input
            type="number"
            placeholder="Custom %"
            value={customTip}
            onChange={(e) => {
              const value = Math.min(100, Math.max(0, Number(e.target.value)));
              setCustomTip(value.toString());
              setTip(value / 100);
            }}
            className="p-3 rounded-xl border-2 border-gray-200 text-center
            focus:border-teal-500 focus:ring-1 focus:ring-teal-500
            placeholder:text-gray-400 [appearance:textfield]"
          />
        </div>
      </form>
    </div>
  );
}

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { budgetTypes } from "@/helper/data";
import { Button } from "@/components/ui/button";

type BudgetTypeProps = {
  activeStep: number;
  setActiveStep: (step: number) => void;
};

export default function BudgetType({
  activeStep,
  setActiveStep,
}: BudgetTypeProps) {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [selectedBudgetType, setSelectedBudgetType] = useState(null);

  const handleBudgetType = (card: any) => {
    setSelectedBudgetType(card);
  };
  return (
    <>
      <div className="mt-10">
        <Label>Monthly Income</Label>
        <Input
          placeholder="Enter your Monthly Income"
          className="w-65 mt-2"
          type="text"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
        />
        <h3 className="text-lg bold mt-6 text-start">
          Choose Your Budget Type
        </h3>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-3 mt-6">
        {budgetTypes.map((card, index) => (
          <div
            key={index}
            onClick={() => handleBudgetType(card.title)}
            className={`bg-white p-4 rounded-lg shadow-md w-60 h-50 border-2 border-gray-300 ${
              selectedBudgetType === card.title ? "border-green-300" : ""
            }`}
          >
            <div className="flex gap-2 flex-col items-center ">
              <h2 className="text-lg font-semibold text-stone-800">
                {card.title}
              </h2>
            </div>

            <div className="flex flex-col items-center mt-3">
              <p className="text-stone-800 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 flex items-center justify-center w-full">
        <Button
          className={`flex items-center justify-center  ${
            selectedBudgetType ? "bg-green-500" : "bg-gray-500"
          }`}
          disabled={!selectedBudgetType}
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Create Your Budget
        </Button>
      </div>
    </>
  );
}

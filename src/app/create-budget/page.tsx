"use client";
import Sidebar from "@/components/Sidebar";
import { budgetTypes } from "@/helper/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { needsBudget } from "@/helper/data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { wantsBudget } from "@/helper/data";
import { savingsBudget } from "@/helper/data";
const CreateBudget = () => {
  const [selectedBudgetType, setSelectedBudgetType] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState("");


  const handleBudgetType = (card: any) => {
    setSelectedBudgetType(card);
  };

  function CreateBudget() {
    return (
      <>
        <div className="mt-10 flex items-center justify-center">
          <h1 className="text-2xl bold">
            Your Budget For {selectedBudgetType}
          </h1>
        </div>

        <h1 className="text-lg bold mt-6">Your Needs Budget: <span className="text-gray-500">$3000</span></h1>
        <p className="text-gray-500">Current Spend: $1150</p>
        <p className="text-green-500">$1850 remaining</p>
        <div className="grid grid-cols-4  gap-9 place-items-center mt-6 ">
          {needsBudget.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md w-65 border-2 border-white"
            >
              <div className="flex gap-2 flex-col items-center ">
                <h2 className="text-lg font-semibold text-stone-800">
                  {card.icon} {card.title}
                </h2>
             <Input/>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-lg bold mt-6">Your Wants Budget: <span className="text-gray-500">$3000</span></h1>
        <p className="text-gray-500">Current Spend: $150</p>
        <p className="text-green-500">$2850 remaining</p>
        <div className="grid grid-cols-4  gap-9 place-items-center mt-6 ">
          {wantsBudget.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md w-65 border-2 border-white"
            >
              <div className="flex gap-2 flex-col items-center ">
                <h2 className="text-lg font-semibold text-stone-800">
                  {card.icon} {card.title}
                </h2>
                <Input/>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-lg bold mt-6">Your Savings Budget: <span className="text-gray-500">$3000</span></h1>
        <p className="text-gray-500">Current Spend: $150</p>
        <p className="text-green-500">$2850 remaining</p>
        <div className="grid grid-cols-4  gap-9 place-items-center mt-6 ">
          {savingsBudget.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md w-65 border-2 border-white"
            >
              <div className="flex gap-2 flex-col items-center ">
                <h2 className="text-lg font-semibold text-stone-800">
                  {card.icon} {card.title}
                </h2>
              </div>
              <Input/>
            </div>
          ))}
        </div>
      </>
    );
  }
  function BudgetType() {
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
          <h3 className="text-lg bold mt-6 text-start">Choose Your Budget Type</h3>
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

  const budgetSteps = () => {
    switch (activeStep) {
      case 0:
        return <BudgetType />;
      case 1:
        return <CreateBudget />;
    }
  };

  return (
    <div className="flex flex-col justify-start ml-70 mt-10 ">
      <h1 className="text-2xl bold ">Create the Perfect Budget</h1>
      <p className="text-gray-500 mt-3">
        A budget is a plan for how you will spend your money. It can help you
        manage your finances and reach your financial goals.
      </p>
      {budgetSteps()}
      <div className=" mt-14 flex items-center justify-center w-full "></div>
      <Sidebar />
    </div>
  );
};

export default CreateBudget;

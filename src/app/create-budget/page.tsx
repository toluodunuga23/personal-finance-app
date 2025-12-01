"use client";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import BudgetBackground from "@/components/budget/create";
import BudgetBreakdown from "@/components/budget/breakdown";

const CreateBudget = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedBudgetType, setSelectedBudgetType] = useState<string | null>(null);

  const budgetSteps = () => {
    switch (activeStep) {
      case 0:
        return <BudgetBackground activeStep={activeStep} setActiveStep={setActiveStep} setSelectedBudgetType={setSelectedBudgetType} selectedBudgetType={selectedBudgetType} />;
      case 1:
        return <BudgetBreakdown selectedBudgetType={selectedBudgetType || ""} />;
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

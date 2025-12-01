"use client";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { needsBudget } from "@/helper/data";
import { Input } from "@/components/ui/input";
import { wantsBudget } from "@/helper/data";
import { savingsBudget } from "@/helper/data";

type BudgetBreakdownProps = {
  selectedBudgetType: string;
};

const BudgetBreakdown = ({selectedBudgetType}: BudgetBreakdownProps) => {



  return (
    <div className="flex flex-col justify-start mt-4 ">
   
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
      <div className=" mt-14 flex items-center justify-center w-full "></div>
      <Sidebar />
    </div>
  );
};

export default BudgetBreakdown;

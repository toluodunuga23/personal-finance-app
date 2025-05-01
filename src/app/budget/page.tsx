'use client'
import Sidebar from "@/components/Sidebar";
import { budgetTypes } from "@/helper/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Budget = () => {
    const [selectedBudgetType, setSelectedBudgetType] = useState(null);

    const handleBudgetType = (card: any) => {
        setSelectedBudgetType(card)
        console.log(card)
    }
  return (
    <div className="flex flex-col ustify-start ml-70 mt-10 ">
          <h1 className="text-2xl bold ">Create the Perfect Budget</h1>
          <p className="text-gray-500 mt-3">
            A budget is a plan for how you will spend your money. It can help you
            manage your finances and reach your financial goals.
          </p>
          <h3 className="text-lg bold mt-3">Choose Your Budget Type</h3>
                <div className="grid grid-cols-4 place-items-center  gap-3  mt-6 ">
                  {budgetTypes.map((card, index) => (
                    <div
                      key={index}
                      onClick={()=> handleBudgetType(card.title)}
                      className={`bg-white p-4 rounded-lg shadow-md w-60 h-50 border-2 border-gray-300 ${selectedBudgetType === card.title ? 'border-green-300' : ''}`}
                    >
                      <div className="flex gap-2 flex-col items-center ">
                 
                        <h2 className="text-lg font-semibold text-stone-800">{card.title}</h2>
                      </div>
                      
                      <div className="flex flex-col items-center mt-3">
                        <p className="text-stone-800 text-sm">{card.description}</p>
                      </div>
                    </div>
                  ))}
                  <div className="ml-200 mt-14">
                   <Button className={`flex items-center justify-center  ${selectedBudgetType ? 'bg-green-500' : 'bg-gray-500'}`} disabled={!selectedBudgetType}>Create Your Budget</Button>
                   </div>
                </div>
               

   
      <Sidebar />
    </div>
  );
};

export default Budget;

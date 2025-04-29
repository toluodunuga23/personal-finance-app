import React from "react";
import { summaryCards } from "@/helper/data";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start ml-70 mt-10 ">
        <h1 className="text-2xl bold ">
          Good Morning, Tolu 👋
        </h1>
        <p className="text-gray-500 mt-3">
        Here’s your financial overview for today.
        </p>
      <div className="grid grid-cols-4  gap-4 place-items-center mt-6 ">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-65 border-2 border-white"
          >
            <div className="flex gap-2 flex-col items-center ">
       
              <h2 className="text-lg font-semibold text-stone-800">{card.icon} {card.title}</h2>
            </div>
            
            <div className="flex flex-col items-center">
              <p className="text-stone-800 text-lg">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Sidebar />
      </>
      
  );
};

export default Dashboard;

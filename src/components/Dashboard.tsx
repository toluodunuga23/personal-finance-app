"use client";
import React, { useEffect } from "react";
import { summaryCards } from "@/helper/data";
import Sidebar from "@/components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import {
  increment,
  decrement,
  increaseByAmount,
  reset,
  incrementAsync,
} from "@/state/budget/budgetSlice";
import { AppDispatch } from "@/state/store";

const Dashboard = () => {
  const currentBudget = useSelector((state: RootState) => state.initalState.value);
  const dispatch = useDispatch<AppDispatch>();




  return (
    <>
    <div className="flex flex-col items-start justify-start ml-70 mt-10 ">
      <h1 className="text-2xl bold ">Good Morning, Tolu 👋</h1>
      <p className="text-gray-500 mt-3">
          Here’s your financial overview for today.
        </p>
        </div>
      <div className="flex flex-col items-start justify-start ml-70 mt-4  ">
        {/* <h2>{currentBudget}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button> */}
        <div className="grid grid-cols-4  gap-9 place-items-center mt-6 ">
          {summaryCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md w-65 border-2 border-white"
            >
              <div className="flex gap-2 flex-col items-center ">
                <h2 className="text-lg font-semibold text-stone-800">
                  {card.icon} {card.title}
                </h2>
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

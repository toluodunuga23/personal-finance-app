'use client'
import Sidebar from "@/components/Sidebar";
import { budgetTypes } from "@/helper/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";


export  function Budget() {
  const router = useRouter();

  function InboxIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    )
  }
  return (
    <>
    <div className="flex flex-col items-center justify-center h-[50vh] gap-6 ml-70">
      <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full dark:bg-gray-800">
        <InboxIcon className="w-10 h-10 text-gray-500 dark:text-gray-400" />
      </div>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">You have not created a budget yet</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Create a budget to get started
        </p>
        <Button className="bg-green-500" onClick={() => router.push('/create-budget')}>Create Budget</Button>
      </div>
    </div>
    <Sidebar />
    </>
    
  )
}



export default Budget;

import React from "react";
import { FaRegBell } from "react-icons/fa";

export function Skill({ children }) {
  return (
    <div className="bg-white p-2 rounded-full flex items-center gap-1 m-1 hover:bg-yellow-400 hover:ring-2 hover:ring-orange-500">
      {children}
    </div>
  );
}

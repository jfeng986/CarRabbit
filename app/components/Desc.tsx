import React from "react";
import { Image } from "@nextui-org/react";

const Desc = () => {
  return (
    <div className="max-w-full flex items-center px-8 py-16 bg-gray-100">
      <div className="flex-1 pr-8">
        <h1 className="text-4xl font-bold mb-6">Everyday life made easier</h1>
        <p className="text-xl font-medium mb-8">
          When life gets busy, you don’t have to tackle it alone. Get time back
          for what you love without breaking the bank.
        </p>
        <ul className=" pl-5 text-lg">
          <li className="mb-4 pl-4">
            ✓ Choose your Tasker by reviews, skills, and price
          </li>
          <li className="mb-4 pl-4">
            ✓ Schedule when it works for you — as early as today
          </li>
          <li className="mb-4 pl-4">
            ✓ Chat, pay, tip, and review all through one platform
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Image
          alt="Man holding a box"
          src="./test01.avif"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Desc;

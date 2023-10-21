import React from "react";
import { Image } from "@nextui-org/react";

const Desc2 = () => {
  return (
    <div className="max-w-full flex items-center px-8 py-16 bg-gray-100">
      <div className="flex-1">
        <Image
          alt="Man holding a box"
          src="./desc2.jpeg"
          className="w-[500px] h-[400px]"
        />
      </div>
      <div className="flex-1 pl-8">
        <h1 className="text-3xl font-bold mb-6">
          A go-to team at your fingertips
        </h1>
        <p className="text-xl font-medium mb-8">
          Build your team of local, background-checked Taskers to help with —
          and for — life. Whatever you need, they’ve got it covered.
        </p>
        <ul className=" pl-5 text-lg">
          <li className="mb-4 pl-4">
            ✓ Compare Tasker reviews, ratings, and prices
          </li>
          <li className="mb-4 pl-4">
            ✓ Choose and connect with the best person for the job
          </li>
          <li className="mb-4 pl-4">
            ✓ Save your favorites to book again and again
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Desc2;

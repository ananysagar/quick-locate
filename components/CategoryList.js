import React, { useState, useEffect } from "react";
import CategoryListData from "../Shared/data";
import Image from "next/image";

function CategoryList() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(CategoryListData);
  }, []);

  return (
    <div className="flex gap-5 mt-8 flex-col">
      <h1 className="font-bold text-xl">Select Your Fav Category</h1>
      {/* <div className="flex flex-col-1 text-xs gap-10 items-center text-center cursor-pointer "> */}
      <div className="flex gap-6">
        {category.map((element, index) => (
          <div
            key={element.index}
            className="flex flex-col items-center p-3 bg-purple-200 rounded-xl hover:scale-105 transition-all duration-100"
          >
            <Image
              src={element.icon}
              alt={element.name}
              width={40}
              height={40}
            />
            <h2 className="text-[12px] text-purple-800">{element.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;

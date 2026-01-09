import React, { useState } from "react";

const App = () => {

  const [allFruits, setAllFruits] = useState(["Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Mango",
    "Orange",
    "Papaya",
    "Pineapple",
    "Watermelon",
  ])


  const [searchFruits, setSearchFruits] = useState("");

  const filteredList = allFruits.filter((fruit) => {
    return fruit.toLowerCase().includes(searchFruits.toLowerCase());
  });

  return (
    <div className="min-h-screen flex flex-col items-center mt-5 ">
      <h1 className="text-6xl text-black">Items Search Filter</h1>

      <div className="w-[75%] mt-10">
        <textarea
          type="search"
          placeholder="Search Fruits..."
          className="w-full h-15 border-2 border-black px-2 py-2 rounded"
          value={searchFruits}
          onChange={(e)=>{
            setSearchFruits(e.target.value)
          }}
        />

        <div className="w-full mt-5">
          {filteredList.length === 0 ? (
            <p className="text-center text-gray-500">No fruits found 🍎</p>
          ) : (
            filteredList.map((fruit, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full mt-3 bg-white border border-gray-300 h-12 flex items-center px-4 rounded shadow-sm hover:bg-emerald-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{fruit}</span>
                </div>
              );
            })
          )}
        </div>
        
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profile, setProfile] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber) {
      alert("All fields are required");
      return;
    }

    // 🔒 only 10 digit number condition
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    setUsers([...users, { name, phoneNumber, profile }]);

    setName("");
    setPhoneNumber("");
    setProfile("");
  };

  return (
    <div className="h-screen flex justify-center items-start pt-10 bg-slate-900">
      <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 rounded-xl w-[350px] text-white">

        <form onSubmit={submitHandler} className="flex flex-col gap-3 text-white">
          <input
            type="text"
            placeholder="Enter name"
            className="border px-3 py-2 outline-none "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Enter 10 digit number"
            className="border px-3 py-2 outline-none"
            value={phoneNumber}
            maxLength={10}
            onChange={(e) =>
              setPhoneNumber(e.target.value.replace(/\D/g, ""))
            }
          />

          <input
            type="text"
            placeholder="Profile image URL"
            className="border px-3 py-2 outline-none"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />

          <button className="bg-green-400 text-black py-2 rounded">
            Submit
          </button>
        </form>

        {/* 🔽 CONTACT LIST */}
        <div className="mt-6 bg-amber-500 rounded-xl p-3 h-[300px] overflow-y-auto">
          <h2 className="text-center text-2xl mb-3 font-bold">Contact List</h2>

          <ul className="flex flex-col gap-2">
            {users.map((user, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between bg-white text-black p-2 rounded"
              >
                <img
                  src={
                    user.profile ||
                    "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  }
                  alt="profile"
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div className="flex-1 ml-3">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm">{user.phoneNumber}</p>
                </div>

                <i className="ri-phone-fill text-xl text-green-600"></i>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default App;

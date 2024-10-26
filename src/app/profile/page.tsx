"use client";

import React, { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    budget: 150000,
    investmentGoals: "Retirement and Wealth Creation",
    profilePic: "https://avatars.githubusercontent.com/u/125679638?v=4", 
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = () => {
    setUser(formValues);
    setIsEditing(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-black">User Profile</h1>
      <div className="bg-white shadow rounded-lg p-4 flex">
        <div className="flex-none w-1/3">
          <img
            src={user.profilePic}
            alt="Profile Picture"
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>
        <div className="flex-grow ml-4">
          {isEditing ? (
            <>
              <h2 className="text-xl font-semibold">Edit Profile</h2>
              <div className="mt-4">
                <label className="block">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </label>
                <label className="block mt-4">
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </label>
                <label className="block mt-4">
                  Budget:
                  <input
                    type="number"
                    name="budget"
                    value={formValues.budget}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </label>
                <label className="block mt-4">
                  Investment Goals:
                  <input
                    type="text"
                    name="investmentGoals"
                    value={formValues.investmentGoals}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </label>
                <div className="mt-4">
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="ml-2 bg-gray-300 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="mt-2">Email: {user.email}</p>
              <p className="mt-2">Budget: ₹{user.budget.toLocaleString()}</p>
              <p className="mt-2">Investment Goals: {user.investmentGoals}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

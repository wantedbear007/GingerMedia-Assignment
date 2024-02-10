import React from 'react';

const HomeScreen = ({ userData }) => {
  const { name, email, age, dob, contact, password } = userData;

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">User Information</h2>
      <div>
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Age:</span> {age}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Date of Birth:</span> {dob}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Contact:</span> {contact}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Password:</span> {password}
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;

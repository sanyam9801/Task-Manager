import React from 'react'
import UI_IMG from "../../assets/images/Auth-img.png"


const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Task Manager</h2>
        {children}
      </div>

      <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-[url('/bg-img.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden p-8">
        {/* You can add any content here if needed */}
      </div>
    </div>
  );
};

export default AuthLayout;
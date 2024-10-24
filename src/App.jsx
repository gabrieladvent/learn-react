import React from "react";
import Button from "./components/Elements/Buton";
import InputForm from "./components/Elements/Inputs/index";

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
          <p className="font-medium text-slate-500">
            Welcome, Please Login to Your Account
          </p>

          <form action="">
            <InputForm 
              title="Email" 
              type="email" 
              name="email" 
              placeholder="example@gmail.com">
            </InputForm>

            <InputForm
              title="Password"
              type="password"
              name="password"
              placeholder="********">
            </InputForm>

            <div className="flex items-center justify-between">
              <Button classname="bg-blue-600 w-full">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

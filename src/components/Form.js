import React, { useState } from "react";

const user = { email: "datisekai", password: "datisekai" };
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
      if(email === user.email && password === user.password)
      {
          setIsLogin(true);
      }else{
          alert('Invalid user')
      }
  }

  const handleLogout = () => {
      alert('Goodbye')
      setIsLogin(false)
  }
  return (
    <div className="min-h-screen bg-violet-400 flex justify-center items-center">
      {!isLogin && (
        <div className="w-[500px] bg-violet-600 rounded-md p-5">
          <h2>Please Login </h2>
          <div className="flex flex-col justify-center">
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              className="mt-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
          </div>
          <button className="bg-violet-900 text-white w-full" onClick={handleLogin}>Sign in</button>
        </div>
      )}
      {isLogin && <button className="bg-violet-900 text-white px-5" onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Form;

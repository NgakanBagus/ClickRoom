import React, { useState } from 'react';

import userIcon from '../Assets/person.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import loginImage from '../Assets/LoginImage.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');

  return (
    <section className="bg-sky-500 min-h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-sky-700">Login</h2>
          <p className="text-xs mt-4 text-sky-700">
            Silahkan login disini ya
          </p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="Username"
              placeholder="Username"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
           
            </div>
            <button className="bg-sky-700 rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

       
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src={loginImage}
            alt="Login Page Image"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;

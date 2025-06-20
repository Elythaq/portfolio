'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Form = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="grid gap-8">
        <section id="back-div" className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl">
          <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
            <h1 className="text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">
              Log in
            </h1>
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setError('');
                const email = e.currentTarget.email.value;
                const password = e.currentTarget.password.value;
                const res = await signIn("credentials", {
                  redirect: false,
                  email,
                  password,
                });
                if (res?.error) {
                  setError('Invalid email or password');
                }
                if (res?.ok && !res.error) {
                  router.replace('/');
                }
              }}
            >
              <div>
                <label htmlFor="email" className="block mb-2 text-lg dark:text-gray-300">Email</label>
                <input id="email" name="email" className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300" type="email" placeholder="Email" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-lg dark:text-gray-300">Password</label>
                <input id="password" name="password" className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300" type="password" placeholder="Password" required />
              </div>
              <a href="#" className="text-blue-400 text-sm transition hover:underline">Forget your password?</a>
              {error && <div className="text-red-500 font-semibold">{error}</div>}
              <button className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
                LOG IN
              </button>
            </form>
            <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
              <p>
                Don't have an account?
                <a href="#" className="text-blue-400 transition hover:underline">Sign Up</a>
              </p>
            </div>
            <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="LinkedIn" />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6 dark:invert" loading="lazy" src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="GitHub" />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/" alt="Facebook" />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" alt="Twitter" />
              </button>
              <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/" alt="Apple" />
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>
                By signing in, you agree to our
                <a href="#" className="text-blue-400 transition hover:underline">Terms</a>
                and
                <a href="#" className="text-blue-400 transition hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Form;

import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';



const Register = () => {
  return (
    <section className="bg-blueGray-50 mt-9 py-20">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
 
        <div className="rounded-lg bg-blueGray-200 shadow-lg">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">Sign in with</h6>
            </div>
            <div className="btn-wrapper text-center m-6">
              <button className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs transition-all duration-150" type="button">
                <FaTwitter className="w-5 mr-1" />Twitter
              </button>
              <button className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs transition-all duration-150" type="button">
                <FaGithub className="w-5 mr-1" />Github
              </button>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div className="px-4 lg:px-10 py-10 pt-0">
            <div className="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form>
              <div className="mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-email">Email</label>
                <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150" id="grid-email" placeholder="Email" />
              </div>
              <div className="mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150" id="grid-password" placeholder="Password" />
              </div>
              <div className="flex items-center mb-3">
                <div className="w-1/2">
                  <input type="checkbox" id="rememberMe" name="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <div className="w-1/2">
                  <a href="#" className="font-bold text-blue-600">Forgot password?</a>
                </div>
              </div>
              <div className="text-center mt-6">
                <button className="bg-indigo-600 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-full transition-all duration-150" type="button">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="relative pt-8 pb-6 mt-2">
        <div className="container mx-auto px-2">
          <div className="text-center text-blueGray-500 font-semibold py-1">
            Made with <a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank">Tailwind CSS</a> by <a href="#" className="text-blueGray-500 hover:text-blueGray-800" target="_blank">Kumaresh</a>.
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Register;

"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="bg-black text-white flex justify-between items-center px-5 md:px-10 py-2 h-16">
        {/* Logo */}
        <div className="logo font-bold text-lg">
          <Link href={"/"}>
            <span className="hidden md:block text-white hover:text-blue-400 transition-colors">
              Buy me a Snack!
            </span>
            <span className="block md:hidden">
              <img
                src="/tea.gif"
                alt="Logo"
                className="w-[60px] pb-6"
              />
            </span>
          </Link>
        </div>

        {/* Search and Buttons */}
        <div className="relative flex items-center">
          <Search />
          {session ? (
            <>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white mx-1 md:mx-2 bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-3 md:px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                type="button"
                onClick={() => setShowDropDown(!showDropDown)}
                onBlur={() => {
                  setTimeout(() => {
                    setShowDropDown(false);
                  }, 300);
                }}
              >
                <span className="hidden md:inline">Welcome&nbsp;</span>
                {session.user.name}
                <svg
                  className="w-2.5 h-2.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  showDropDown ? "" : "hidden"
                } absolute top-12 right-0 md:right-2 bg-gray-800 text-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      href={"/profile"}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={() => signOut()}
                      className="block px-4 py-2 border-t border-gray-600 hover:bg-gray-700"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link href={"/login"}>
              <button
                type="button"
                className="text-white bg-black from-green-400 to-blue-600 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-800 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2"
              >
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

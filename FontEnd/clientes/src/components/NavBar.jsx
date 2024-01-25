import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-8 rounded-lg">
      <h1 className="text-2xl font-bold"> Task Manager </h1>
      <ul>
        <li className="inline-block mx-3">
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li className="inline-block mx-3">
          <a href="/login" className="text-white">
            Login
          </a>
        </li>
        <li className="inline-block mx-3">
          <a href="/register" className="text-white">
            Register
          </a>
        </li>
        <li className="inline-block mx-3">
          <a href="/calendary" className="text-white">
            Calendario
          </a>
        </li>
        <li className="inline-block mx-3">
          <a href="/tasks/new" className="text-white">
            Nuevo Task
          </a>
        </li>
        <li className="inline-block mx-3">
          <a href="/Calendario" className="text-white">
            Nuevo Calendario
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-2">
        <a href="/" className="brand-logo">
          React + TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Todos</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

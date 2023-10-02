"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navMenuRef = useRef();
  const navToggleRef = useRef();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeNav();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const toggleNav = () => {
    setIsNavExpanded((prevExpanded) => !prevExpanded);
    if (!isNavExpanded) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  const closeNav = () => {
    setIsNavExpanded(false);
    document.body.classList.remove("disable-scroll");
  };

  const handleFocusOut = (event) => {
    if (!navMenuRef.current.contains(event.relatedTarget)) {
      closeNav();
    }
  };

  return (
    <nav className="nav" aria-label="main">
      <button
        className="nav__toggle"
        aria-expanded={isNavExpanded}
        aria-controls="nav__menu-list"
        aria-label="menu"
        onClick={toggleNav}
        ref={navToggleRef}
      >
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
      </button>
      <div className={`nav__menu${isNavExpanded ? " expanded" : ""}`}>
        <ul className="nav__menu-list" role="list">
          <li className="nav__menu-item" role="listitem">
            <Link href="/pricing" className="nav__menu-link primary__link">
              Pricing
            </Link>
          </li>
          <li className="nav__menu-item" role="listitem">
            <Link href="/about" className="nav__menu-link primary__link">
              About
            </Link>
          </li>
          <li className="nav__menu-item" role="listitem">
            <Link href="/contact" className="nav__menu-link primary__link">
              Contact
            </Link>
          </li>
        </ul>
        <Link href="/contact" className="nav__menu-btn button button--primary">
          Schedule a Demo
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

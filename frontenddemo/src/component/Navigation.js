"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navigation = ({children}) => {
  const array = [
    { path: "/", menu: "Home" },
    { path: "/addproducts", menu: "Addproducts" },
    { path: "/contact", menu: "Contact us" },
    { path: "/cart", menu: "Cart" },
  ];
  const location = usePathname();
  return (
    <div className="main_wrapper">
      <header>
        <nav>
          <ul className="sitenav">
            {array?.map((navlink, index) => (
              <li key={index}>
                <Link
                  href={navlink?.path}
                  className={`${location === navlink?.path && "active"}`}
                >
                  {navlink?.menu}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Navigation;

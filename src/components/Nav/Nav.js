"use client";
import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    };
    return (
        <header className="py-4 max-w-6xl mx-auto flex gap-10 items-center ">
            <h1 className="font-integral text-3xl">Shop.co</h1>
            <nav>
                <ul className="flex items-baseline gap-5">
                    <li className="">
                        <Link className="" href="/">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="/">On Sale</Link>
                    </li>
                    <li>
                        <Link href="/">New Arrivals</Link>
                    </li>
                    <li>
                        <Link href="/">Brand</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-3 px-5 py-2 rounded-full flex-grow items-center bg-gray-200">
                <span className="icon-[carbon--search]"></span>
                <input className=" outline-none bg-transparent flex-grow" type="text" placeholder="Search for products..." />
            </div>
            <div className="text-xl flex gap-4">
                <button onClick={() => toggleMenu()} type="button">
                    <span className="icon-[carbon--shopping-cart]"></span>
                </button>
                <Link href="/">
                    <span className="icon-[carbon--user]"></span>
                </Link>
            </div>
            {/* {isMenuOpen && <ShoppingCart isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} */}
            <ShoppingCart isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </header>
    );
}

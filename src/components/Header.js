import React from "react";
import { Link } from "react-router-dom";
import CartLink from "./Cart/CartLink";
export default function Header() {
    return (
        <header className="header">
          
            <nav>
                <ul>
                    <div>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/products">products</Link>
                        </li>

                        

                    </div>
                    <div>
                        <li>
                            <CartLink />
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

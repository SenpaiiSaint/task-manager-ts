import React from "react";

interface NavbarProps {
    toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu }) => {
    return (
        <nav className="navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    )
}

export default Navbar;
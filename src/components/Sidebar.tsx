import React from "react";

interface SidebarProps {
    isOpen : boolean;
    closeMenu : () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeMenu }) => {
    return (
        <>
            {isOpen && <div className="overlay" onClick={closeMenu}></div>}
            <aside className={`side-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={closeMenu}>Home</li>
                    <li onClick={closeMenu}>Tasks</li>
                    <li onClick={closeMenu}>Settings</li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;
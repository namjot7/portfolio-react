import { useState } from "react";
import { FaBars, FaBriefcase, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const NavbarItems = () => {
    return (
        <>
            <a className="btn" href="/" > <IoHome />Home</a>
            <a className="btn" href="#projects"><FaBriefcase />Projects</a>
            <a className="btn" href="#about"><FaUserAlt />About</a>
            <a className="btn" href="#contact-form"><FaPhoneAlt />Contact</a>
            <a className="btn flex-center gap-2" href="https://github.com/namjot7" target="_blank">
                <img width={26} src="/github.png" alt="github_account" />GitHub
            </a>
        </>
    )
}
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="wrapper border-b border-gray-400 p-4">
            <div className="flex justify-between items-center">
                <a href="/" className="logo relative h2-bold tracking-wider mx-5">Namjot</a>
                <div className="hidden md:flex-center gap-5">
                    <NavbarItems />
                </div>
                <span className="hamburger md:hidden cursor-pointer" onClick={() => setOpen(!open)}><FaBars /></span>
            </div>
            {open && <div className="flex-center h-screen flex-col gap-10 text-xl transition-all">
                <NavbarItems />
            </div>}
        </nav>
    )
}
export default Navbar
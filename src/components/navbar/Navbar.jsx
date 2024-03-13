import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">vilāsa booking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
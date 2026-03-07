import { Link } from "react-router-dom";

function Header() {

    return(
        <header className = "header">
            <nav>
                <ul className = "nav-links">
                    <li><Link to = "/">ABOUT ME</Link></li>
                    <li><Link to = "/experience">EXPERIENCE</Link></li>
                    <li><Link to = "/education">EDUCATION</Link></li>
                    <li><Link to = "/projects">PROJECTS</Link></li>
                    <li><Link to = "/skills">SKILLS</Link></li>
                </ul>
            </nav> 
        </header>
    );

}

export default Header
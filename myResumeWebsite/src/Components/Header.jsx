import { Link } from "react-router-dom";

function Header() {

    return(
        <header className = "header">

            <div className="socials">

                <a href="https://github.com/haleycrousser" target="_blank" rel="noopener noreferrer">
                    <img src="/github.png" className="socialIcon"/>
                </a>

                <a href="https://www.linkedin.com/in/haleycrousser/" target="_blank" rel="noopener noreferrer">
                    <img src="/LinkedIn.png" className="socialIcon"/>
                </a>

                <a href="https://leetcode.com/u/haleycrousser/" target="_blank" rel="noopener noreferrer">
                    <img src="/leetcode.png" className="socialIcon"/>
                </a>

            </div>
            
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
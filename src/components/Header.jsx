import { Link } from "react-router-dom"

export default function Header() {
    return <nav>
        <div className="nav-wrapper blue accent-1">
            <Link to="/" className="brand-logo">SPA React project</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    </nav>
}
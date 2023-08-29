import { Link } from "react-router-dom";
import { FcFinePrint } from "react-icons/fc";
import "../App.css";

const Header = () => {
    return (
        <nav className="headerBox">
          <h2 class="typing-animation">
            <Link to="/"><FcFinePrint></FcFinePrint>CompaniesLib</Link>
          </h2>
        </nav>
    )
}

export default Header;
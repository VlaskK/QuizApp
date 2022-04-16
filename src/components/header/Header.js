
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Link to="/" className="title" >
                Quiz Hub
            </Link>
        <hr className="divider" />
        </div>
    );
}

export default Header;

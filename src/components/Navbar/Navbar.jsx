import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
    return(
        <div>
            <div className="logo">Logo</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;

import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink to='/' >🔍 Search</NavLink>
            <NavLink to='/counter' >🔄 Counter</NavLink>
            <NavLink to='/search' >🔎 Search [v2]</NavLink>
        </nav>
    )
}

export default NavBar;
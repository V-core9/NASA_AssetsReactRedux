
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <button onClick={(e) => window.history.back()}>Back</button>
            <NavLink to='/' >🔍 Home</NavLink>
            <NavLink to='/counter' >🔄 Counter</NavLink>
            <NavLink to='/search' >📑 Search</NavLink>
        </nav>
    )
}

export default NavBar;
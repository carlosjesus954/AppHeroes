import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className="Nav">
            
            <Link 
                className="Nav-link" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="Nav-container">
                <div className="Nav-elements">

                    <NavLink 
                        className={({isActive}) => `Nav-link ${isActive ? "Nav-active" : ""}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `Nav-link ${isActive ? "Nav-active" : ""}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="Nav-log">
                <ul className="Nav-ul">
                    <span className="Nav-span">Carlos</span>
                    <button className='Nav-button'>LogOut</button>
                </ul>
            </div>
        </nav>
    )
}
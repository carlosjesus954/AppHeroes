import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const NavBar = () => {
    const navigate = useNavigate();

    const onLogout = () =>{
        navigate('/login', {
            replace: true
        });
        logout()
    };
    const {user, logout}=useContext( AuthContext )
    // Agregar un listener para el evento "popstate"
    window.addEventListener('popstate', () => {
        navigate('/login', {
            replace: true
        });
    });

    return (
        <nav className="Nav">
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
                    <NavLink 
                        className={({isActive}) => `Nav-link ${isActive ? "Nav-active" : ""}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
            </div>

            <div className="Nav-log">
                <ul className="Nav-ul">
                    <span className="Nav-span">{user}</span>
                    <button className='Nav-button' onClick={onLogout}  >LogOut</button>
                </ul>
            </div>
        </nav>
    );
}

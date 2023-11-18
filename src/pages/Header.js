import React from 'react';
import './Header.css';
import LogoCanil from '../images/CANil.png'
import {FaBars, FaUser,} from 'react-icons/fa'
function Header() {
    return(
       <div className='ct'>
        <header className='headerArea'>
            <nav className='navArea'>
                <div className='menuArea'>
                    <div className='labelMenu'>
                        <label>
                            <span className='spanMenu'><FaBars/></span>
                        </label>
                    <img className="logoImg" src={LogoCanil}/>
                    </div>
                    
                </div>
                
                <div className='pesquisaArea'>
                    <select className='cidadesAera'>
                        <option value="Busque uma cidade">Busque uma cidade</option>
                        <option value="Cotia">Cotia</option>
                        <option value="Brasilia">Brasília-DF</option>
                        <option value="Presidente Prudente">Presidente Prudente</option>
                    </select>
                </div>
                <div className='loginArea'>
                    <button className='btnLogin'><FaUser/>Login</button>
                </div>
            </nav>
        </header>
       </div>
    )
}
export default Header;
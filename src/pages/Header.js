import React, { useState } from 'react';
import './Header.css';
import LogoCanil from '../images/CANil.png'
import {FaBars, FaUser,} from 'react-icons/fa'
import { click } from '@testing-library/user-event/dist/click';
function Header() {

// const [cidade, setCidade]  = useState (["Presidente Prudente", "São Paulo"]) 
const [cidades, setCidades] = useState('Presidente Prudente');

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
                    <label  >
                    <select className='cidadesArea' name='cidades'  onChange={e => setCidades(e.target.value)} >
                        <option value={"Presidente Prudente"}>Presidente Prudente</option>
                        <option value={"Sao Paulo"} >Sao Paulo</option>
                    </select>
                    </label>
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
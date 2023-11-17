import React from 'react';
import './Header.css';
import LogoCanil from '../images/LogoCanil.png'
function Header() {
    return(
       <div className='content'>
        <header className='headerArea'>
            <nav className='navArea'>
                <div className='menuArea'>
                    <div className='menuBtn'>
                    <button className='menuBtnArea'>Menu</button>
                    </div>
                    
                </div>
                <div className='logoArea'>
                    <img className="logoImg" src={LogoCanil}/>
                </div>
                <div className='pesquisaArea'>
                    <select className='cidadesAera'>
                        <option value="Cotia">Cotia</option>
                        <option value="Brasilia">Brasília-DF</option>
                        <option value="Presidente Prudente">Presidente Prudente</option>
                    </select>
                </div>
                <div className='loginArea'>
                    <button className='btnLogin'>Login</button>
                </div>
            </nav>
        </header>
       </div>
    )
}
export default Header;
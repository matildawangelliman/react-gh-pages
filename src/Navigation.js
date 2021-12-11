import logo from './logo.svg';
import './Navigation.css'
import { Turn as Hamburger } from 'hamburger-react';

function Navigation() {
    return (
        <div className="Navigation">
        <img src={logo} className="Brand-logo" alt="logo" />
        <div className="Nav-right">
        <h1 className="contact"> 212.555.5555 </h1>
        <h1> LOGIN </h1>
        <Hamburger className="hamburger" color="#3f3f3f" distance="sm" direction="right" size={19} />
        </div>
        
        </div>
    )
}

export default Navigation

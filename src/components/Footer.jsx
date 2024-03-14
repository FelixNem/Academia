import { Link, NavLink } from 'react-router-dom';
import {Redes} from './';

import '../style/FooterStyle.css'

export const Footer = () => {
  return (
    <div className='footer' >
        <div>
            <p>
                Conception Besitifui #515<br/>
                Del Valle Centro<br/>
                Chilpancingo de los Bravo<br/>
                39000, Guerrero<br/>
                <span className='importantInfo'>
                    +52 933 406 1712<br/>
                    <NavLink className='linkFooter' to='/legal'>Terminos y condiciones</NavLink>
                </span>
            </p>
        </div>
        <div className='redesFooter' >
            <Redes onlyIcons={true} row={true}/>
        </div>
    </div>
  )
}

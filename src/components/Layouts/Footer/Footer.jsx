import React from 'react'

import { Networks } from '../networks/networks'
import './footer.css'
export const Footer = ({fotter = 'fotter',contactcontainer1='contact-container1'}) => {
  return (
    <footer className={fotter}>
    <div className='footerP'><p>&copy; {new Date().getFullYear()} Andrés Sarchi. Todos los derechos reservados.</p>
    </div>
    <Networks contactcontainer={contactcontainer1}/>
    </footer>
  )
}

import React from 'react'
import {Netwoks} from '../../Layouts/Networcks/Netwoks'
import './footer.css'
export const Footer = ({fotter = 'fotter',contactcontainer1='contact-container1'}) => {
  return (
    <footer className={fotter}>
    <div className='footerP'><p>&copy; {new Date().getFullYear()} Andrés Sarchi.</p>
    </div>
    <Netwoks contactcontainer={contactcontainer1}/>
    </footer>
  )
}

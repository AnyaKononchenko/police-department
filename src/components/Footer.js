import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer flex-centered'>
      <Link to='/add-detective'>Want to join our team?</Link>
    </footer>
  )
}

export default Footer;
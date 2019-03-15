import { Link } from "gatsby"
import React from "react"

/* Import FontAwesome */
import "./fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}. Powered by
    {` `}
    <a href="https://www.secnix.com" target="_blank" rel="noopener noreferrer">Secnix</a><br /><br />
    <a href="http://example.com/"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" className="mr-2" /></a>
    <a href="http://example.com/"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" className="mr-2" /></a>
    <Link to="/contact"><FontAwesomeIcon icon={['fab', 'github']} size="2x" className="mr-2" /></Link>
    <Link to="/contact"><FontAwesomeIcon icon={['fas', 'home']} size="2x" className="mr-2" /></Link>
    <Link to="/contact"><FontAwesomeIcon icon={['fas', 'coffee']} size="2x" className="mr-2" /></Link>
    <Link to="/contact"><FontAwesomeIcon icon={['fas', 'heart']} size="2x" className="mr-2" /></Link>
    <Link to="/contact"><FontAwesomeIcon icon={['fas', 'phone']} size="2x" className="mr-2" /></Link>
    <Link to="/contact"><FontAwesomeIcon icon={['fas', 'envelope']} size="2x" className="mr-2" /></Link>
    <Link to="/contact"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} size="2x" className="mr-2" /></Link>
    <Link to="/contact"><FontAwesomeIcon icon={['fas', 'user']} size="2x" className="mr-2" /></Link>
  </footer>
)

export default Footer

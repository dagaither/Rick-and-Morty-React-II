import { useState } from 'react';
import galaxyLogo from '../assets/galaxy-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-expand-sm navbar-light bg-secondary fixed-top">
        <NavbarBrand><navbar-brand>Rick and Morty</navbar-brand></NavbarBrand>
        {/* <navbar-brand><h5>Rick and Morty</h5></navbar-brand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/characters">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/favorites">Favorites</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><img className="navIcon" src={galaxyLogo} /></NavbarText>
        </Collapse> 
      </Navbar>
    </div>
  );
}

export default Example;
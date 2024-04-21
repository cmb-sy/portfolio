import "./module.css";
import { navigationItems } from "./HeaderItem";
import { Navbar, Nav } from "react-bootstrap";
export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">SampleApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {navigationItems.map((item) => (
            <Nav.Link href={item.url}>{item.value}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

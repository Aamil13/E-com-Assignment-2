
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Header({handlePriceSort, handleFilter}) {

  const [range, setRange] = useState(100)


    let expand = 'lg'
  return (
    <>
        <Navbar bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">E-com(Assignment-2)</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Sort By"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item onClick={()=>handlePriceSort('dec')}>
                      Price High to Low
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={()=>handlePriceSort('inc')}>
                      Price Low to High
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Filter"
                    
                  >
                    <>
                    <Form.Label>Price under ${range}</Form.Label>
                    <Form.Range value={range} min={1} max={500} onChange={(e)=>setRange(e.target.value)}/>
                    <>
                    <div className='btn btn-outline-dark btn-sm w-100' onClick={()=>handleFilter(range)}>Apply</div>
                    </>
                  </>
                  </NavDropdown>
                  <Nav.Link>My Account</Nav.Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;
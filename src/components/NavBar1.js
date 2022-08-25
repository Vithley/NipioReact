
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/images/logo ni pio  circulo turquesa.png';

function NavBar1() {
  return (
    <>
      {['xl'].map((expand) => (
        <div>
        <div className="barra">
        <div className="text-icons">
            <h5>Logopeda especialista en</h5>
            <a href="mailto:nipiologopedia@gmail.com" target="_blank" rel='noreferrer'><ion-icon name="mail-outline"></ion-icon></a>
            <a href="https://api.whatsapp.com/send/?phone=351913557223&text=hola+me+gustar%C3%ADa+recibir+infomaci%C3%B3n+de+logopedia+online&app_absent=0
            " target="_blank" rel='noreferrer'><ion-icon name="logo-whatsapp"></ion-icon></a>
            <div className="icons-barra">
            <a href="https://www.instagram.com/nipio_lopogopedia/" target="_blank" rel='noreferrer'><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="https://www.youtube.com/" target="_blank" rel='noreferrer'><ion-icon name="logo-youtube"></ion-icon></a>
            <a href="https://www.tiktok.com/" target="_blank" rel='noreferrer'><ion-icon name="logo-tiktok"></ion-icon></a>
            </div>
                
        </div>
    </div>
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            
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
                <Nav className="justify-content-star flex-grow-1 pe-3 align-items-center ">
                <Nav.Link href="/home">Inicio</Nav.Link>
                <Nav.Link href="/equipo">Equipo</Nav.Link>
                <Nav.Link href="/packs">Pack logopedia</Nav.Link>
                <Nav.Link href="/consultas">Consultas</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
                  
                    
                </Nav>
                <Navbar.Brand href="#" className="justify-content-end">
                <div className="logo">
                <img className="logo" src={logo} alt="logo" width="100px" height="100px"/>
                <Navbar.Brand href="#">Logopeda especialista en</Navbar.Brand>
            </div>
                </Navbar.Brand>
             
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      ))}
    </>
  );
}

export default NavBar1;
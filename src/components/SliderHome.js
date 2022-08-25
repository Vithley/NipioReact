import Carousel from 'react-bootstrap/Carousel';
import nino from '../assets/images/nino.png';
import terapia from '../assets/images/equipo.png';

function SliderHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nino}
          alt="First slide"
          loop 
          muted 
          autoPlay 
        />
        <Carousel.Caption>
          <h1>NI PÍO_LOGOPEDIA</h1>
          <p>ESPECIALISTAS EN LA COMUNICACIÓN</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={terapia}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>NI PÍO_LOGOPEDIA</h3>
          <p>ESPECIALISTAS EN LA COMUNICACIÓN</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHome;
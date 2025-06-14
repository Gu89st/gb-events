import Portada from "../Assets/Imagenes/Portada2.png";
import MNavbar from "../Components/Barradenav";
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import DataC from "../Data/DataC";
import Image from 'react-bootstrap/Image';

function Inicio() {
  return (
    <div>
      <div className="position-relative">
        <img src={Portada} alt="Portada" className="w-100" />
        <div className="position-absolute top-0 w-100">
          <MNavbar />
        </div>
        <div className="position-absolute w-100 text-center" style={{ top: '50%', color: 'white' }}>
          <h1 className="hero-title">Hacemos realidad tu sueños</h1>
          <Button variant="warning">Contáctanos</Button>
        </div>
      </div>
        <div>
          <h1 className="text-center">Nuestra Novedades</h1>
          <Carousel className="d-flex justify-content-center aling-items-center" variant="dark"> {/*variant dark cambia de color a las flechas */}
            {DataC.map((item, index)=>(
              <Carousel.Item key={index} interval={3000} >
                <Image src={item.img}  className="w-50 h-45 d-block mx-auto"/> {/* esto permite que la imagen se presente como un bloque*/}           
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Inicio;

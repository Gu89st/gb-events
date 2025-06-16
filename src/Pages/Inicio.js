import Portada from "../Assets/Imagenes/Portada2.png";
import MNavbar from "../Components/Barradenav";
import Botones from "../Components/Botones";
import Carousel from 'react-bootstrap/Carousel';
import DataC from "../Data/Datain";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import { Datatitles } from "../Data/Datain";
import { Col, Row } from "react-bootstrap";
import { DataFi } from "../Data/Datain";
import { Databot } from "../Data/Datain";

function Inicio() {
  return (
    <div>
      <div className="position-relative">
        <img src={Portada} alt="Portada" className="w-100" />
        <div className="position-absolute top-0 w-100">
          <MNavbar />
        </div>
        <div className="position-absolute w-100 text-center" style={{ top: '40%', color: 'white' }}>
          {Datatitles.map((link)=>(
            <h1 className="fs-1">{link.label1}</h1>
          ))}
            <div className="d-flex justify-content-center align-items-center" style={{ position: 'relative', top: '20px' }}>
              <Botones botones={Databot} />
            </div>
        </div>
      </div>
      <div >
          {Datatitles.map((link)=>(
            <h1 className="text-center">{link.label2}</h1>
          ))}
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>{/* maxwidth modifica el ancho del div  margin: 0 auto centra automaticamente*/}
            <Carousel  variant="dark"> {/*variant dark cambia de color a las flechas */}
              {DataC.map((item, index)=>(
                <Carousel.Item key={index} interval={3000}  >
                  <Image src={item.img}  className="w-50 d-block mx-auto img-fluid"/> {/* esto permite que la imagen se presente como un bloque*/}           
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
      </div>
      <div>
          <div>
            {Datatitles.map((link)=>(
              <h1 className="text-center">{link.label3}</h1>
            ))}
          </div>
        <div style={{maxWidth: '1000px', margin: '0 auto' }}> 
            <Row className="g-5"> 
              {DataFi.map((item, index) => (
                <Col key={index}>
                  <Card className="mx-auto position-relative">
                    <Card.Img variant="top" src={item.img} className="img-fluid" />
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <Botones botones={item.botones} /> 
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
        </div>
      </div>
        
    </div>
  );
}

export default Inicio;

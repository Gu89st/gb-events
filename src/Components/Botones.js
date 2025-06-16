import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Botones({ botones }) {
  return (
    <div>
      {botones.map((boton, index) => (
        <Link key={index} to={boton.re}>
          <Button variant="warning">{boton.btn}</Button>
        </Link>
      ))}
    </div>
  );
}

export default Botones;

import { Row } from "react-bootstrap";
import Color from "./Color";

const ListaColores = ({colores}) => {
    return (
        <Row className=" justify-content-center">
            {
                colores.map((color, posicion)=> <Color key={posicion} nombre={color.nombre} id={color.id}></Color>)
            }
        </Row>
    );
};

export default ListaColores;
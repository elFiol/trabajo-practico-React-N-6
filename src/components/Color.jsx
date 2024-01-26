import { Button, Col } from "react-bootstrap";
import "./Principal.css"

const Color = ({nombre,id}) => {
    return (
        <Col lg={3} md={4} sm={12} className="color text-center my-3 py-4 mx-3">
            <h4>{nombre}</h4>
            <div className="w-75"></div>
            <Button variant="danger" type="button">Borrar</Button>
        </Col>
    );
};

export default Color;
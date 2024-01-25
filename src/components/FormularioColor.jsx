import { Form, Button } from "react-bootstrap";
import "./Principal.css"

const FormularioColor = () => {
    return (
        <div className="formularioDiv">
            <h3 className="text-center mb-2">Administrador de Colores</h3>
            <div className="formularioSubDiv">
                <div className="colorForm"></div>
                <Form className="w-75">
                    <Form.Group>
                        <Form.Control type="text" placeholder="ingrese un color. EJ: blue"></Form.Control>
                    </Form.Group>
                    <Button className="mt-3">Guardar</Button>
                </Form>
            </div>
        </div>
    );
};

export default FormularioColor;
import { Form, Button } from "react-bootstrap";
import "./Principal.css"
import { useEffect, useState } from "react";

const FormularioColor = () => {
    const [color, setColor] = useState("")
    const [colores, setColores] = useState([])
    const handlerSubmit = (e) => {
        e.preventDefault()
        setColores([...colores, color])
        setColor("")
    }
    return (
        <div className="formularioDiv">
            <h3 className="text-center mb-2">Administrador de Colores</h3>
            <div className="formularioSubDiv">
                <div className="colorForm"></div>
                <Form className="w-75" onSubmit={handlerSubmit}>
                    <Form.Group>
                        <Form.Control type="text" maxLength={50} minLength={2} placeholder="ingrese un color. EJ: blue" onChange={(e) => { setColor(e.target.value) }} value={color} required></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="mt-3">Guardar</Button>
                </Form>
            </div>
        </div>
    );
};

export default FormularioColor;
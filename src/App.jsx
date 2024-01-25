import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';
import FormularioColor from './components/FormularioColor';

function App() {
  return (
    <Container className='my-5'>
      <FormularioColor></FormularioColor>
    </Container>
  )
}

export default App
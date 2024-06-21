import { Button } from "../../components/Button"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Button title="Teste 1" />
            <Button title="Teste 2" variant="secondary" />
        </>
    )
}

export { Home };
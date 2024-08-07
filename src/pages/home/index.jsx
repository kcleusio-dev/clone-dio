import { Button } from "../../components/Button"
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header";
import banner from '../../assets/banner.png';

import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente
                            <br />
                        </TitleHighlight>
                        O seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare
                        o novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar Agora" variant="secundary" onClick={handleClickSignIn} />
                </div>
                <div>
                    <img src={banner} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    )
}

export { Home };
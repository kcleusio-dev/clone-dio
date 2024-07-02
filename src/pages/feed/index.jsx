import { Button } from "../../components/Button"
import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import banner from '../../assets/banner.png';

import { Column, Container, TextContent, Title, TitleHighlight } from './styles';
import { Card } from "../../components/Card";
import { InfoUser } from "../../components/InfoUser";

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <InfoUser percentual={77} nome="Helder Daniel" imagem="https://avatars.githubusercontent.com/u/144366835?v=4" />
                    <InfoUser percentual={90} nome="Helder Daniel" imagem="https://avatars.githubusercontent.com/u/144366835?v=4" />
                    <InfoUser percentual={3} nome="Helder Daniel" imagem="https://avatars.githubusercontent.com/u/144366835?v=4" />
                    <InfoUser percentual={50} nome="Helder Daniel" imagem="https://avatars.githubusercontent.com/u/144366835?v=4" />
                    <InfoUser percentual={55} nome="Helder Daniel" imagem="https://avatars.githubusercontent.com/u/144366835?v=4" />
                    <InfoUser percentual={35} nome="Helder Daniel" imagem="https://avatars.githubusercontent.com/u/144366835?v=4" />
                    <InfoUser percentual={10} nome="Helder Daniel" imagem="https://avatars.githubusercontent.com/u/144366835?v=4" />
                    <InfoUser percentual={10} nome="Helder Daniel" imagem="https://avatars.githubusercontent.com/u/144366835?v=4" />
                </Column>
            </Container>
        </>
    )
}

export { Feed };
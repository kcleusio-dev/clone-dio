import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header";

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { Input } from "../../components/input";

const Login = () => {
    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça o seu Registo</TitleLogin>
                        <SubTitleLogin>Faça o seu login e make the change.</SubTitleLogin>
                        <form>
                            <Input placeholder="email" leftIcon={<MdEmail />} />
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci a minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login };
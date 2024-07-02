import React from 'react'

import { Container, NameText, Progress, UserPicture } from './styles'

const InfoUser = ({imagem, nome, percentual}) => {
    return (
        <Container>
            <UserPicture src={imagem}/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>
            </div>

        </Container>
    )
}

export { InfoUser }
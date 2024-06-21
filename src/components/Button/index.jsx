import React from 'react'

import { ButtonContainer } from './styles';

const Button = ({ title, variant = 'primary', onClick }) => {
    return (
        <ButtonContainer>
            {title}
        </ButtonContainer>
    )
}

export { Button };

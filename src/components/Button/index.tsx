import React from 'react';

import {
    Container,
    Title
} from './styles';

interface ButtonProps {
    title: string
    color?: string
    onPress: () => void
    disabled?: boolean
}

export function Button({
    title,
    color,
    onPress,
    disabled
}: ButtonProps){

    return (
        <Container 
            color={color} 
            onPress={onPress}
            disabled={disabled}
            style={{ opacity: disabled === true ? .5 : 1 }}
        >
            <Title>{title}</Title>
        </Container>
    )
}
import React from 'react';

import { Load } from '../Load';

import { useTheme } from 'styled-components';

import {
    Container,
    Title
} from './styles';

interface ButtonProps {
    title: string
    color?: string
    onPress: () => void
    disabled?: boolean
    loading?: boolean
}

export function Button({
    title,
    color,
    onPress,
    disabled,
    loading
}: ButtonProps){
    const theme = useTheme()

    return (
        <Container 
            color={color} 
            onPress={onPress}
            disabled={disabled}
            style={{ opacity: (disabled === true || loading === true) ? .5 : 1 }}
        >
            {
                loading === true 
                ? <Load color={theme.colors.background_secondary} />
                : <Title>{title}</Title>
            }
        </Container>
    )
}
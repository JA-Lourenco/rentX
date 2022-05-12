import React from 'react';

import MaTerialIcons from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from 'styled-components';

import {
    Container,
} from './styles';

interface BackButtonProps {
    color?: string
    onPress: () => void
}

export function BackButton({ color, ...rest }: BackButtonProps){
    const theme = useTheme()

    return (
        <Container {...rest}>
                <MaTerialIcons
                    name='keyboard-arrow-left'
                    size={24}
                    color={color ? color : theme.colors.text}
                />
        </Container>
    )
}
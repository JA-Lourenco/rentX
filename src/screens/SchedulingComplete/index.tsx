import React from 'react';

import { ConfirmButton } from '../../components/ConfirmButton';

import { StatusBar } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';

export function SchedulingComplete(){
    const { width } = useWindowDimensions()

    const navigation = useNavigation<any>()

    function handleRentalCompleted() {
        navigation.navigate('Home')
    }

    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />

                <Title>Carro Alugado!</Title>

                <Message>
                    Agora você só precisa ir{'\n'}até a concessionária da RENTX{'\n'}pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton 
                    title='OK' 
                    onPress={handleRentalCompleted}
                />
            </Footer>
        </Container>
    )
}
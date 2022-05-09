import React from 'react';

import { BackButton } from '../../components/BackButton';

import {
    Container,
    CarImageSlider,
    CarDescription,
    Info,
    Brand,
    Name,
    Rent,
    Period,
    Price
} from './styles';

export function CarDetails(){
    return (
        <Container>
            <BackButton 
                onPress={() => {}}
            />

            <CarImageSlider
                source={{ uri: 'https://www.pikpng.com/pngl/b/223-2238897_mad-max-apocalypse-cool-cars-vehicle-mad-max.png' }}
                resizeMode= 'contain'
            />
          
            <CarDescription>
                <Info>
                    <Brand>MAD MAX</Brand>

                    <Name>Interceptor</Name>
                </Info>

                <Rent>
                    <Period>AO DIA</Period>

                    <Price>R$ 120</Price>
                </Rent>
            </CarDescription>
        </Container>
    )
}
import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
    Container,
    Header,
    CarImagesContainer,
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
            <Header>
                <BackButton 
                    onPress={() => {}}
                />
            </Header>

            <CarImagesContainer>
                <ImageSlider 
                    imagesUrl={['https://www.pikpng.com/pngl/b/223-2238897_mad-max-apocalypse-cool-cars-vehicle-mad-max.png']} 
                />
            </CarImagesContainer>

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
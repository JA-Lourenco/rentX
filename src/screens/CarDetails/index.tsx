import React from 'react';

import { CarDTO } from '../../dtos/CarDTO';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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
    Price,
    Details,
    Accessories,
    About,
    Footer
} from './styles';

interface Params {
    car: CarDTO
}

export function CarDetails(){
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { car } = route.params as Params

    function handleConfirmRental() {
        navigation.navigate('Scheduling')
    }

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <StatusBar 
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />

            <Header>
                <BackButton 
                    onPress={handleGoBack}
                />
            </Header>

            <CarImagesContainer>
                <ImageSlider 
                    imagesUrl={ car.photos } 
                />
            </CarImagesContainer>

            <CarDescription>
                <Info>
                    <Brand>{ car.brand }</Brand>

                    <Name>{ car.name }</Name>
                </Info>

                <Rent>
                    <Period>{ car.rent.period }</Period>

                    <Price>R$ { car.rent.price }</Price>
                </Rent>
            </CarDescription>

            <Details>
                <Accessories>
                    {
                        car.accessories.map(accessory => 
                            <Accessory 
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)} 
                            />    
                        )
                    }
                </Accessories>

                <About>{ car.about }</About>
            </Details>

            <Footer>
                <Button 
                    title='Escolher período do aluguel'
                    onPress={handleConfirmRental}
                />
            </Footer>


        </Container>
    )
}
import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

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
    Acessories,
    About,
    Footer
} from './styles';

export function CarDetails(){
    const navigation = useNavigation<any>()

    function handleConfirmRental() {
        navigation.navigate('Scheduling')
    }

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

            <Details>
                <Acessories>
                    <Accessory 
                        name='380km/h'
                        icon={speedSvg}
                    />

                    <Accessory 
                        name='3.2s'
                        icon={accelerationSvg}
                    />

                    <Accessory 
                        name='800 HP'
                        icon={forceSvg}
                    />

                    <Accessory 
                        name='Gasolina'
                        icon={gasolineSvg}
                    />

                    <Accessory 
                        name='Manual'
                        icon={exchangeSvg}
                    />

                    <Accessory 
                        name='2 pessoas'
                        icon={peopleSvg}
                    />
                </Acessories>

                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
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
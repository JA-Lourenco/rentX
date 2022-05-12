import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather'
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

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
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
    Footer
} from './styles';

export function SchedulingDetails(){
    const theme = useTheme() 

    const navigation = useNavigation<any>()

    function handleConfirmRentalSummary() {
        navigation.navigate('SchedulingComplete')
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

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name='calendar'
                            size={RFValue(24)}
                            color={theme.colors.background_secondary}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                    <Feather 
                        name='chevron-right'
                        size={RFValue(24)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>

                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Details>

            <Footer>
                <Button 
                    title='Alugar agora'
                    color={theme.colors.success}
                    onPress={handleConfirmRentalSummary}
                />
            </Footer>


        </Container>
    )
}